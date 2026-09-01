<script>
    import { onMount } from "svelte";

    let isOpen = false;
    let selectedTheme = "system";

    const navLinks = [
        { href: "/", title: "Home" },
        { href: "/resume", title: "Resume" },
        { href: "/experience", title: "Experience" },
        { href: "/projects", title: "Projects" },
        { href: "/about", title: "About Me" },
        { href: "/sandbox", title: "Sandbox" },
        { href: "/contact", title: "Contact" },
    ];

    const themeOptions = [
        { value: "light", label: "☀️ Light" },
        { value: "dark", label: "🌖 Dark" },
        { value: "system", label: "⚙️ System" },
    ];

    function applyTheme(theme) {
        const root = document.documentElement;
        const dark =
            theme === "dark" ||
            (theme === "system" &&
                window.matchMedia("(prefers-color-scheme: dark)").matches);
        root.style.colorScheme = dark ? "dark" : "light";
    }

    onMount(() => {
        // Use the previously saved preference, else fall back to "system".
        const saved = localStorage.getItem("theme-preference");
        if (saved === "light" || saved === "dark" || saved === "system") {
            selectedTheme = saved;
        }
        applyTheme(selectedTheme);
    });

    function saveTheme(event) {
        selectedTheme = event.currentTarget.value;
        localStorage.setItem("theme-preference", selectedTheme);
        applyTheme(selectedTheme);
    }

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

<div class="topbar">
    <button
        class="hamburger"
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
        aria-expanded={isOpen}
        aria-controls="sidebar-nav"
        on:click={toggleSidebar}
    >
        <span class="hamburger-bar"></span>
        <span class="hamburger-bar"></span>
        <span class="hamburger-bar"></span>
    </button>
</div>

{#if isOpen}
    <button
        class="sidebar-backdrop"
        aria-label="Close navigation sidebar"
        on:click={closeSidebar}
    ></button>
{/if}

<aside class="sidebar" class:sidebar-open={isOpen} id="sidebar-nav">
    <details class="theme-switcher">
        <summary class="theme-control">
            <span class="visually-hidden">Select theme</span>
        </summary>
        <div class="theme-extra">
            {#each themeOptions as option}
                <label class="theme-label">
                    <input
                        type="radio"
                        name="theme-preference"
                        value={option.value}
                        bind:group={selectedTheme}
                        on:change={saveTheme}
                    />
                    <span>{option.label}</span>
                </label>
            {/each}
        </div>
    </details>
    <div class="sidebar-content">
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
    <p class="sidebar-title">Spencer's Website</p>
</aside>

<style>
    .topbar {
        position: fixed;
        top: 1rem;
        left: 1rem;
        z-index: 60;
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .hamburger {
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
    
    .hamburger-bar {
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
    
    .sidebar-open {
        transform: translateX(0);
    }

    .sidebar-title {
        margin: 0.15rem 0 1.5rem;
        padding: 1.5rem;
        color: var(--color-muted, #6b7280);
        font-size: 1.15rem;
        font-weight: 600;
    }
    
    .theme-switcher {
        position: absolute;
        top: 1rem;
        right: 1rem;
        color: var(--color-text, #111827);
    }

    /* Vertically center the label/icon inside the trigger. The global
       theme-toggle.css uses `inline-list-item`, which ignores align-items;
       switch to flex so the pill content is truly centered, and give the
       trigger a fixed 44px height to match the hamburger. */
    .theme-switcher > summary.theme-control {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 44px;
        min-height: 44px;
        padding: 0 0.75rem;
        border-radius: 6px;
        box-sizing: border-box;
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
        .theme-switcher,
        .sidebar,
        .sidebar-backdrop {
            display: none;
        }
    }
</style>