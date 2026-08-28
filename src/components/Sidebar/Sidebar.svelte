<script>
    let isOpen = false;

    const navLinks = [
        { href: "/", title: "Home" },
        { href: "/resume", title: "Resume" },
        { href: "/experience", title: "Experience" },
        { href: "/projects", title: "Projects" },
        { href: "/about", title: "About Me" },
        { href: "/sandbox", title: "Sandbox" },
        { href: "/contact", title: "Contact" },
    ];

    function toggleSidebar() {
        isOpen = !isOpen;
    }

    function closeSidebar() {
        isOpen = false;
    }

    function handleKeydown(event) {
        if (event.key === "Escape") {
            closeSidebar();
        }
    }
</script>

<svelte:window on:keydown={handleKeydown} />

<button
    class="hamburger"
    aria-label={isOpen ? "Close Menu" : "Open Menu"}
    aria-expanded={isOpen}
    aria-controls="sidebar-nav"
    on:click={toggleSidebar}
>
    <span class="hamburger__bar"></span>
    <span class="hamburger__bar"></span>
    <span class="hamburger__bar"></span>
</button>

{#if isOpen}
    <button
        class="sidebar-backdrop"
        aria-label="Close navigation sidebar"
        on:click={closeSidebar}
    ></button>
{/if}

<aside class="sidebar" class:sidebar--open={isOpen} id="sidebar-nav">
    <div class="sidebar-content">
        <p class="sidebar__title">Spencer's Website</p>
        <nav aria-label="Sidebar Navigation">
            <ul>
                {#each navLinks as navLink}
                    <li>
                        <a href={navLink.href} on:click={closeSidebar}>{navLink.title}</a>
                    </li>
                {/each}
            </ul>
        </nav>
    </div>
</aside>

<style>
    .hamburger {
        position: fixed;
        top: 1rem;
        left: 1rem;
        z-index: 60;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 5px;
        width: 44px;
        height: 44px;
        border: 1px solid var(--color-border, #e5e7eb);
        border-radius: 6px;
        background: var(--color-bg, #fff);
        cursor: pointer;
        padding: 0;
    }
    
    .hamburger__bar {
        display: block;
        width: 22px;
        height: 2px;
        margin: 0 auto;
        background: var(--color-text, #111827);
        border-radius: 2px;
    }
    
    .sidebar-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.4);
        z-index: 40;
        border: none;
        cursor: pointer;
    }
    
    .sidebar {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 260px;
        max-width: 80vw;
        background: var(--color-bg, #fff);
        border-right: 1px solid var(--color-border, #e5e7eb);
        padding: 5rem 0 2rem;
        transform: translateX(-100%);
        transition: transform 0.2s ease;
        z-index: 50;
        overflow-y: auto;
    }
    
    .sidebar--open {
        transform: translateX(0);
    }
    
    .sidebar__title {
        margin: 0.15rem 0 1.5rem;
        padding: 0 1.5rem;
        color: var(--color-muted, #6b7280);
        font-size: 0.9rem;
    }
    
    .sidebar nav ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
    }

    .sidebar nav a {
        display: flex;
        width: 100%;
        padding: 0.6rem 1.5rem;
        border: 1px solid var(--color-border, #e5e7eb);
        margin-top: -1px;
        background: var(--color-bg, #fff);
        color: var(--color-text, #111827);
        text-decoration: none;
        font-size: 1rem;
        transition: border-color 0.2s ease, background 0.2s ease,
            color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
    }

    .sidebar nav li:first-child a {
        margin-top: 0;
    }

    .sidebar nav a:hover {
        border-color: var(--color-accent, #2563eb);
        background: var(--color-bg-secondary, #f3f4f6);
        color: var(--color-accent, #2563eb);
        transform: translateY(-2px);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
    }
    
    @media print {
        .hamburger,
        .sidebar,
        .sidebar-backdrop {
            display: none;
        }
    }
</style>