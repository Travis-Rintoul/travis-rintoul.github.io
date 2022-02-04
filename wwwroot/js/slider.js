var _activeSection = 0;
var slider = {
    sections: ['landing', 'prevwork', 'contact'],
    animating: false,
    animationTime: 500,
    listeners: [],
    get sectionCount()
    {
        return this.sections.length - 1;
    },
    sectionData: function (section)
    {
        let self = this;
        
        if (section == null)
        {
            section = this.activeSection;            
        }
        
        return {
            $: $("#" + this.sections[section]),
            get events()
            {
                let events = self.listeners.filter(function (e) 
                {
                    return e.section === self.sections[section];    
                });
                
                let obj =  {
                    'before': events.filter((e) => { return e.event == "before" }),
                    'during': events.filter((e) => { return e.event == "during" }),
                    'after': events.filter((e) => { return e.event == "after" })
                };
                
                return obj;
            },
            get isLoaded()
            {                 
                return this.$.hasClass('loaded');
            },
            get panes()
            {
                let _section = this;
                let _panes = this.$.find('.pane');
                let _parent = this.$;
                
                let array = _panes.map(function (index, pane) 
                {
                    return {
                        $: $(this),
                        isPrimary: $(this).hasClass('primary'),
                        show: function ()
                        {
                            let isEven = ((index + 1) % 2 === 0);
                            let props = {
                                easing: 'easeInCubic'
                            };

                            if (isEven)
                            {
                                //props['left'] = -($(window).width() / 3);
                                props['left'] = ($(window).width());
                            }
                            else
                            {
                                props['left'] = 0;
                            }
                            
                            this.$.animate({ opacity: 1, easing: 'easeInOutExpo' }, 1000);

                            this.$.parent().animate(props, 500, function (e)
                            {
                                //elf.animating = false;
                            });
                        },
                        hide: function ()
                        {
                            
                        }
                    };
                }).get();
                
                return array;
            },
            get primaryPane()
            {
                return this.panes.filter(function (pane) 
                {
                    return pane.isPrimary;
                })[0];    
            },
            scrollTo: function ()
            {
                // Begin Vertical Animation
                self.animating = true;

                let newSectionEvents = self.sectionData().events;

                newSectionEvents.before.forEach(function (e) 
                {
                   e.callback(); 
                });

                newSectionEvents.during.forEach(function (e)
                {
                    e.callback();
                });

                $("#page-content").animate({ top: -(($(window).height()) * self.activeSection), easing: 'easeOutQuad' }, self.animationTime, function (e)
                {
                    self.animating = false;

                    newSectionEvents.after.forEach(function (e)
                    {
                        e.callback();
                    });

                });
                
                let pp = this.primaryPane;
                
                if (pp != null)
                {
                    pp.show();
                }
            },
            undoScroll: function ()
            {
                let isEven = ((this.$.index() + 1) % 2 === 0);
                let props = {};

                if (isEven) 
                {
                    props['left'] = -($(window).width());
                }
                else
                {
                    props['left'] = $(window).width();
                }
                
                this.$.find('.panes').animate(props, 500);
            }
        }
    },
    get activeSection() 
    {
        return _activeSection;
    },
    set activeSection(value)
    {
        let self = this;

        // Handle Nav-Item Click
        if (typeof value == "string")
        {
            value = this.sections.indexOf(value);
        }
        
        let prevSection = this.sectionData(this.activeSection); 
        
        // Set Value
        _activeSection = value;
        let section = this.sectionData(value);
        
        let page = $("#page-content");
        let active = page.find(".active");
  
        // Animate the Y scroll. 
        section.scrollTo();
        prevSection.undoScroll();
        
        // Handle Class Assignments
        active.removeClass("active");
        active = $("#" + this.sections[this.activeSection]);
        active.addClass('active');
    },
    onWheel: function (e, callback)
    {
        let isDownScroll = !(e.originalEvent.wheelDelta >= 0);
        
        if (isDownScroll)
        {
            this.next();
        }
        else
        {
            this.prev();
        }
    },
    on: function (section, callback)
    {
        this.listeners.push({ 
            section: section, 
            callback: callback,
            event: 'during'
        });
    },
    before: function (section, callback)
    {
        this.listeners.push({
            section: section,
            callback: callback,
            event: 'before'
        });          
    },
    after: function (section, callback)
    {
        this.listeners.push({
            section: section,
            callback: callback,
            event: 'after'
        });
    },
    onLoad: function (e)
    {
        $("#page").find('section').each(function () 
        {
            //$(this).addClass((($(this).index() + 1) % 2 === 0) ? 'even' : 'odd');
        });
    },
    next: function ()
    {
        let oldActive = this.activeSection;
        let newActive = null;
        
        if (oldActive + 1 <= this.sectionCount)
        {
            newActive = oldActive + 1;
        }

        if (newActive != null && !this.animating)
        {
            this.activeSection = newActive;
        }
    },
    prev: function ()
    {
        let oldActive = this.activeSection;
        let newActive = null;

        if (oldActive - 1 >= 0)
        {
            newActive = oldActive - 1;
        }

        if (newActive != null && !this.animating)
        {
            this.activeSection = newActive;
        }
    }
};