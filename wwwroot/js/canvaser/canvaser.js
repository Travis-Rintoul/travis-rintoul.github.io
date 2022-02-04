
function Canvas(element)
{
    return {
        $: $(element),
        ctx: null,
        resize: function ()
        {
            this.width = $(window).width();
            this.height = $(window).height();
        },
        get width()
        {
            return this.$.width();
        },
        set width(value)
        {
            this.$.get(0).width = value;    
        },
        get height()
        {
            return this.$.height();
        },
        set height(value)
        {
            this.$.get(0).height = value;
        }
    }
}

function Particle(x, y, color)
{
    return {
        x: x,
        y: y,
        color: color,
        canvas: null,
        update: function ()
        {
            
        },
        draw: function (ctx)
        {

            this.canvas.ctx.beginPath();
            this.canvas.ctx.rect(this.x, this.y, 2, 2);
            this.canvas.ctx.fillStyle = this.color;
            this.canvas.ctx.fill();
        }
    }
}

function ParticleMap(element)
{
    let canvas = Canvas(element);
    
    let particleMap = {
        particles: [],
        get center()
        {
            return {
                x: ($(window).width() / 2),
                y: ($(window).height() / 2)
            }        
        },
        init: function ()
        {
            this.particles.forEach(function (p) 
            {
               p.draw(); 
            });
        },
        addParticle: function (x, y)
        {
            let particle = Particle(x, y, 'rgba(255,255,255,0.6)');
            particle.canvas = this;
            this.particles.push(particle);
        }
    };
    
    return Object.assign(canvas, particleMap);
}

