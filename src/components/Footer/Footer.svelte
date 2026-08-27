<script>
    import { ICONS } from '../../data/icons.js';

    const year = new Date().getFullYear();

    const links = [
        {
            label: "Email",
            href: "mailto:sashbyui@gmail.com",
            icon: "email",
            external: false,
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/ashcraft-spencer",
            icon: "linkedin",
            external: true,
        },
        {
            label: "School Profile",
            href: "#",
            icon: "school",
            external: true,
        },
        {
            label: "GitHub",
            href: "https://github.com/CodingSpencer",
            icon: "github",
            external: true,
        },
        {
            label: "Phone",
            href: "tel:+13854041235",
            icon: "phone",
            external: false,
        },
    ];
</script>

<footer class="site-footer">
    <div class="site-footer-content">
        <ul class="site-footer-links">
            {#each links as link}
                <li>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : "_self"}
                      rel={link.external ? "noreferrer noopener" : ""}
                      aria-label={link.label}
                    >
                        <span class="icon">{@html ICONS[link.icon]}</span>
                    </a>
                </li>
            {/each}
        </ul>
    
        <p class="site-footer-copyright">&copy; {year} Spencer Ashcraft. All rights reserved.</p>
    </div>
</footer>

<style>
    .site-footer {
        border-top: 1px solid var(--color-border, #e5e7eb);
        padding: 1.5rem 1rem;
        margin-top: 2rem;
    }
    
    .site-footer-content {
        max-width: 900px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    
    .site-footer-links {
        display: flex;
        gap: 1.25rem;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    
    .site-footer-links a {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        text-decoration: none;
        color: var(--color-text, #111827);
        font-size: 0.9rem;
    }
    
    .site-footer-links a:hover {
        color: var(--color-accent, #2563eb);
    }
    
    .icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 18px;
        height: 18px;
    }

    .icon :global(svg) {
        width: 100%;
        height: 100%;
    }
    
    .site-footer-copyright {
        margin: 0;
        color: var(--color-muted, #6b7280);
        font-size: 0.85rem;
    }
    
    @media print {
        .site-footer {
            display: none;
        }
    }
</style>