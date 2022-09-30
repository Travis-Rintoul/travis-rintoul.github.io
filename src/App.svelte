<script lang="ts">

    import * as animateScroll from "svelte-scrollto";
    import { numInRange } from "./helpers/utils";
    import Contact from "./lib/Contact.svelte";
    import Landing from "./lib/Landing.svelte";
    import Projects from "./lib/Projects.svelte";
    import Stack from "./lib/Stack.svelte";

    import { breakPoint, BreakPoints, updateBreakPoint } from './stores/media'

    enum Direction { up, down }

    let currentIndex = 0;
    let sections = [
        { name: 'landing', active: true },
        // { name: 'stack', active: false },
        // { name: 'projects', active: false },
    ];

    function handleWheel(e: any) 
    {
        var dir = null;

        if (e.deltaY < 0)
            dir = Direction.up;
        else if (e.deltaY > 0)
            dir = Direction.down;

        if (dir == Direction.up)
        {
            if (currentIndex != 0)
                currentIndex--;
        }

        else if (dir == Direction.down)
        {
            if (currentIndex < (sections.length - 1 ))
                currentIndex++;
        }

        sections.forEach(e => e.active = false);
        sections[currentIndex].active = true;

        scrollTo();
    };

    function scrollTo()
    {
        animateScroll.scrollTo({
            duration: 1000,
            element: `section:nth-of-type(${currentIndex + 1})`
        });
    }

    function resize(e: any)
    {
        updateBreakPoint();
    }

    function load()
    {
        breakPoint.subscribe((value) =>
        {
            //console.log(value);
	    });
    }

</script>

<svelte:window on:resize={resize} on:load={load} />

<!-- <div id="page" on:mousewheel={handleWheel}> -->
<div id="page">
    <div>
        <section>
            <Landing active={sections[0].active} />
        </section>
        <!-- <section>
            <Stack active={sections[2].active} />
        </section>
        <section>
            <Projects active={sections[1].active} />
        </section> -->
    </div>
</div>

<style>

    section:first-of-type
    {
        background: linear-gradient(0deg, #282b5c 0%, #2444ba 100%);
    }

    #page 
    {
        background: linear-gradient(0deg, #282b5c 0%, #2444ba 100%);
        width: 100%;
    }

    section
    {
        height: 100vh;
    }

</style>