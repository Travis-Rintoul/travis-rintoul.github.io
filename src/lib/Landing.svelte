<script lang="ts">
    import { breakPoint, BreakPoints } from "../stores/media";

    let name = 'Travis Rintoul';
    let title = 'Developer';

    let github = 'https://github.com/Travis-Rintoul';
    let linkedin = 'https://www.linkedin.com/in/travis-rintoul-615a861b1/';

    let bpWidth = 1200;
    let compressed = (window.innerWidth < bpWidth);

    function load()
    {
        compressed = (window.innerWidth < bpWidth);
    }

    function resize()
    {
        compressed = (window.innerWidth < bpWidth);
    }

</script>

<svelte:window on:resize={resize} on:load={load} />
  
<div id="landing">
    <div id="nav">
        <div>
            <h1>{name}</h1>
        </div>
        <div id="socials">
            <a href={github}>
                <img src="./github-w.png" alt="">
            </a>
            <a href={linkedin}>
                <img src="./linked-w.png" alt="">
            </a>
        </div>
    </div>
    <div id="wrapper" class={(compressed) ? "compressed" : "expanded"}>
        <div id="info">
            <h1 id="name">Travis Rintoul</h1>
            <h2 id="title">.NET Developer</h2>
            <div id="contact">Contact Me</div>
        </div>
        <div id="picture">
            <img id="me" src="./me.png" alt="background" />
        </div>
    </div>
</div>

<style>

    #landing 
    { 
        display: flex; 
        flex-direction: column;   
    }
    
    #nav { height: 50px; display: flex; padding: 10px; }
    #nav h1 { font-family: Arial, Helvetica, sans-serif; color: white; line-height: 50px; font-size: 6vw; }
    #nav > div { flex: 1; }
    #nav #socials { display: flex; justify-content: end; }
    #nav #socials a { width: 50px; margin-left: 15px; }
    #nav img { width: 50px; }

    #wrapper 
    {
        display: flex;
    }

    .compressed
    {
        flex-direction: column-reverse;
    }

    #wrapper img 
    {
        display: block;
        width: 70%;
        margin: auto;
        border-radius: 50%;
    }

    #name
    {
        font-weight: bold;
        text-transform: uppercase;
        color: transparent;
        -webkit-text-stroke: 1px white; 
        font-size: 11vw;
        white-space:nowrap;
    }

    #title 
    {
        font-size: 9vw;
        color: white;
    }

    #wrapper #info 
    {
        margin-top: 30px;
    }

    #wrapper #info #name, #title
    {
        font-family: Arial, Helvetica, sans-serif;
    }

    #wrapper #info #contact 
    {
        display: block;
        background-color: #F07D67;    
        padding: 20px 50px;
        color: white;
        border-radius: 60px;
        border: 0;
        margin: auto;
        margin-top: 20px;
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
    }

    @media only screen and (max-width: 1199px)
    {
        #contact 
        {
            font-size: 8vw;
        }
        
        .compressed 
        {
            flex-direction: column-reverse;
        }

        .compressed #info #name 
        {
            text-align: center;
        }

        .compressed #info #title 
        {
            text-align: center;
        }

        .compressed #contact 
        {
            float: unset;
            margin: auto;
            width: 50%;
        }
    }

    @media only screen and (min-width: 1200px)
    {
        
        #nav h1 
        {
            font-size: 35px;
        }

        #name 
        {
            font-size: 100px;
        }

        .compressed #info #contact
        {
            width: 30%;
        }

        .expanded
        {
            margin-top: 160px;
        }

        .expanded div:first-of-type 
        {
            width: 55%;
        }

        .expanded div:last-of-type 
        {
            width: 45%;
        }

        .expanded #info
        {
            text-align: right;
            padding: 20px;
            padding-top: 80px;
        }

        .expanded #picture img
        {
            float: left;
            margin-left: 20px;
        }

        .expaned #info > #name,#title,#contact
        {
            padding: unset;
            text-align: right;
        }

        #title
        {
            font-size: 84px;
        }

        .expanded #contact 
        {
            font-size: 40px;
            border-radius: 100px;
            width: 30%;
            float: right;
        }
    }

</style>
