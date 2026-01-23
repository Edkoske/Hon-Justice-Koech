        // Default configuration
        const defaultConfig = {
            candidate_name: "Justice Koech",
            slogan: "Rero Raa",
            ward_name: "Soliat Ward",
            party_name: "UDA - United Democratic Alliance",
            hero_title: "Leadership That Delivers",
            hero_subtitle: "Your Voice in the County Assembly",
            cta_primary: "Join the Movement",
            cta_secondary: "View Agenda",
            about_intro: "A son of Soliat Ward, Justice Koech was born and raised in this community. His deep roots and understanding of local challenges drive his commitment to serve.",
            phone_number: "+254 728 501 777",
            email_address: "koechjustice8@gmail.com",
            primary_color: "#166534",
            accent_color: "#EAB308",
            background_color: "#ffffff",
            text_color: "#111827",
            surface_color: "#f9fafb"
        };

        // Config change handler
        async function onConfigChange(config) {
            const finalConfig = { ...defaultConfig, ...config };
            
            // Update text content
            document.getElementById('nav-name').textContent = finalConfig.candidate_name;
            document.getElementById('nav-ward').textContent = finalConfig.ward_name + " MCA 2027";
            document.getElementById('hero-candidate-name').textContent = finalConfig.candidate_name;
            document.getElementById('hero-slogan').textContent = finalConfig.slogan;
            document.getElementById('hero-title').textContent = finalConfig.hero_title;
            document.getElementById('hero-subtitle').textContent = finalConfig.hero_subtitle;
            document.getElementById('hero-ward').textContent = finalConfig.ward_name;
            document.getElementById('party-badge').textContent = finalConfig.party_name;
            document.getElementById('cta-primary-btn').textContent = finalConfig.cta_primary;
            document.getElementById('cta-secondary-btn').textContent = finalConfig.cta_secondary;
            document.getElementById('about-intro').textContent = finalConfig.about_intro;
            document.getElementById('contact-phone').textContent = finalConfig.phone_number;
            document.getElementById('contact-email').textContent = finalConfig.email_address;

            // Update colors
            document.body.style.backgroundColor = finalConfig.background_color;
            document.body.style.color = finalConfig.text_color;

            // Update primary color elements
            const primaryElements = document.querySelectorAll('.bg-green-700, .text-green-700, .border-green-700');
            primaryElements.forEach(el => {
                if (el.classList.contains('bg-green-700')) {
                    el.style.backgroundColor = finalConfig.primary_color;
                }
                if (el.classList.contains('text-green-700')) {
                    el.style.color = finalConfig.primary_color;
                }
                if (el.classList.contains('border-green-700')) {
                    el.style.borderColor = finalConfig.primary_color;
                }
            });

            // Update accent color elements
            const accentElements = document.querySelectorAll('.bg-yellow-400, .text-yellow-400, .border-yellow-400, .text-yellow-300, .border-yellow-300');
            accentElements.forEach(el => {
                if (el.classList.contains('bg-yellow-400') || el.classList.contains('bg-yellow-300')) {
                    el.style.backgroundColor = finalConfig.accent_color;
                }
                if (el.classList.contains('text-yellow-400') || el.classList.contains('text-yellow-300')) {
                    el.style.color = finalConfig.accent_color;
                }
                if (el.classList.contains('border-yellow-400') || el.classList.contains('border-yellow-300')) {
                    el.style.borderColor = finalConfig.accent_color;
                }
            });
        }

        // Map to capabilities
        function mapToCapabilities(config) {
            return {
                recolorables: [
                    {
                        get: () => config.background_color || defaultConfig.background_color,
                        set: (value) => {
                            if (window.elementSdk) {
                                window.elementSdk.config.background_color = value;
                                window.elementSdk.setConfig({ background_color: value });
                            }
                        }
                    },
                    {
                        get: () => config.surface_color || defaultConfig.surface_color,
                        set: (value) => {
                            if (window.elementSdk) {
                                window.elementSdk.config.surface_color = value;
                                window.elementSdk.setConfig({ surface_color: value });
                            }
                        }
                    },
                    {
                        get: () => config.text_color || defaultConfig.text_color,
                        set: (value) => {
                            if (window.elementSdk) {
                                window.elementSdk.config.text_color = value;
                                window.elementSdk.setConfig({ text_color: value });
                            }
                        }
                    },
                    {
                        get: () => config.primary_color || defaultConfig.primary_color,
                        set: (value) => {
                            if (window.elementSdk) {
                                window.elementSdk.config.primary_color = value;
                                window.elementSdk.setConfig({ primary_color: value });
                            }
                        }
                    },
                    {
                        get: () => config.accent_color || defaultConfig.accent_color,
                        set: (value) => {
                            if (window.elementSdk) {
                                window.elementSdk.config.accent_color = value;
                                window.elementSdk.setConfig({ accent_color: value });
                            }
                        }
                    }
                ],
                borderables: [],
                fontEditable: undefined,
                fontSizeable: undefined
            };
        }

        // Map to edit panel values
        function mapToEditPanelValues(config) {
            const finalConfig = { ...defaultConfig, ...config };
            return new Map([
                ["candidate_name", finalConfig.candidate_name],
                ["slogan", finalConfig.slogan],
                ["ward_name", finalConfig.ward_name],
                ["party_name", finalConfig.party_name],
                ["hero_title", finalConfig.hero_title],
                ["hero_subtitle", finalConfig.hero_subtitle],
                ["cta_primary", finalConfig.cta_primary],
                ["cta_secondary", finalConfig.cta_secondary],
                ["about_intro", finalConfig.about_intro],
                ["phone_number", finalConfig.phone_number],
                ["email_address", finalConfig.email_address]
            ]);
        }

        // Initialize Element SDK
        if (window.elementSdk) {
            window.elementSdk.init({
                defaultConfig,
                onConfigChange,
                mapToCapabilities,
                mapToEditPanelValues
            });
        }

        // Mobile menu toggle
        document.getElementById('mobile-menu-btn').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                document.getElementById('mobile-menu').classList.add('hidden');
            });
        });

        // CTA button actions
        document.getElementById('cta-primary-btn').addEventListener('click', function() {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        });

        document.getElementById('cta-secondary-btn').addEventListener('click', function() {
            document.getElementById('agenda').scrollIntoView({ behavior: 'smooth' });
        });

        // Volunteer form submission
        document.getElementById('volunteer-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const successMessage = document.getElementById('volunteer-success');
            successMessage.classList.remove('hidden');
            
            // Reset form
            this.reset();
            
            // Hide message after 5 seconds
            setTimeout(() => {
                successMessage.classList.add('hidden');
            }, 5000);
        });

        // Lightbox / simple carousel for gallery images
        (function(){
            const galleryImages = Array.from(document.querySelectorAll('#gallery img'));
            if(!galleryImages.length) return;

            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightbox-img');
            const btnClose = document.getElementById('lightbox-close');
            const btnNext = document.getElementById('lightbox-next');
            const btnPrev = document.getElementById('lightbox-prev');
            let currentIndex = 0;

            const srcs = galleryImages.map(img => img.getAttribute('src'));

            function openAt(i){
                currentIndex = (i + srcs.length) % srcs.length;
                lightboxImg.src = srcs[currentIndex];
                lightbox.classList.remove('hidden');
                lightbox.classList.add('flex');
            }

            function close(){
                lightbox.classList.add('hidden');
                lightbox.classList.remove('flex');
                lightboxImg.src = '';
            }

            galleryImages.forEach((img, idx) => {
                img.style.cursor = 'pointer';
                img.addEventListener('click', () => openAt(idx));
            });

            btnClose.addEventListener('click', close);
            btnNext.addEventListener('click', () => openAt(currentIndex + 1));
            btnPrev.addEventListener('click', () => openAt(currentIndex - 1));

            lightbox.addEventListener('click', (e) => {
                if(e.target === lightbox) close();
            });

            document.addEventListener('keydown', (e) => {
                if(lightbox.classList.contains('hidden')) return;
                if(e.key === 'Escape') close();
                if(e.key === 'ArrowRight') openAt(currentIndex + 1);
                if(e.key === 'ArrowLeft') openAt(currentIndex - 1);
            });
        })();