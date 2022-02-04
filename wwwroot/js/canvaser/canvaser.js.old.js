function Pillar()
{
    let pillar = {
        draw: function ()
        {
            
        },
        update: function ()
        {
            
        }
    };
    
    return pillar;
}

function PillarBoard(element, opts)
{
    let Defaults = {
        auto: true,
        pillarWidth: 50,
        pillarHeight: 50
    };
    
    if (opts != null)
    {
        opts = Object.assign(opts, Defaults);
    }
    else 
    {
        opts = Defaults;
    }
    
    let obj = {
        $: $(element),
        opts: opts,
        pillars: [],  
        init: function ()
        {
            this.opts.resolution = {
                x: $(window).width(),
                y: $(window).height()
            };
            
            this.createPillars();
        },
        createPillars: function ()
        {
            let pillarsPerRow = (this.opts.resolution.x / this.opts.pillarWidth);
            
            for (let i = 0; i < pillarCount; i++)
            {
                
                this.pillars.push(Pillar());
            }
            
        }
    };
    
    if (obj.opts.auto)
    {
        obj.init();
    }
    
    return obj;
}