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

        // Professional Page Loader
        (function() {
            const loader = document.getElementById('page-loader');
            const root = document.getElementById('root');
            const loaderImage = document.querySelector('.loader-image');
            
            // Ensure loader image loads first
            function hideLoader() {
                setTimeout(() => {
                    loader.classList.add('hidden');
                    root.classList.remove('content-hidden');
                    root.classList.add('content-visible');
                }, 600);
            }
            
            // Preload the loader image
            if (loaderImage) {
                const img = new Image();
                img.onload = function() {
                    // Loader image loaded, now wait for page images
                    loadPageContent();
                };
                img.onerror = function() {
                    // Loader image failed, still proceed
                    loadPageContent();
                };
                img.src = loaderImage.src;
            } else {
                loadPageContent();
            }
            
            function loadPageContent() {
                // Wait for main page images to load
                const images = document.querySelectorAll('#root img');
                let imagesLoaded = 0;
                const totalImages = images.length;
                
                if (totalImages === 0) {
                    // No images, hide loader after minimum display time
                    setTimeout(hideLoader, 1000);
                } else {
                    // Track image loading
                    images.forEach(img => {
                        if (img.complete) {
                            imagesLoaded++;
                        } else {
                            img.addEventListener('load', function() {
                                imagesLoaded++;
                                checkComplete();
                            });
                            img.addEventListener('error', function() {
                                imagesLoaded++;
                                checkComplete();
                            });
                        }
                    });
                    
                    function checkComplete() {
                        if (imagesLoaded === totalImages) {
                            hideLoader();
                        }
                    }
                    
                    // Check if all already loaded
                    if (imagesLoaded === totalImages) {
                        setTimeout(hideLoader, 1000);
                    }
                    
                    // Fallback timeout (max 4 seconds)
                    setTimeout(hideLoader, 4000);
                }
            }
        })();

        // Image loading states
        document.querySelectorAll('img').forEach(img => {
            if (!img.complete) {
                img.classList.add('img-loading');
                img.addEventListener('load', function() {
                    this.classList.remove('img-loading');
                });
                img.addEventListener('error', function() {
                    this.classList.remove('img-loading');
                });
            }
        });

        // Scroll reveal animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe sections for scroll reveal
        document.querySelectorAll('section').forEach(section => {
            section.classList.add('reveal-on-scroll');
            observer.observe(section);
        });

        // Volunteer form submission with proper error handling
        document.getElementById('volunteer-form').addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const form = this;
            const submitBtn = document.getElementById('volunteer-submit-btn');
            const messageDiv = document.getElementById('volunteer-message');
            const formData = new FormData(form);
            
            // Hide previous messages
            messageDiv.classList.add('hidden');
            messageDiv.className = 'hidden form-message';
            
            // Show loading state
            submitBtn.classList.add('btn-submitting');
            submitBtn.disabled = true;
            form.classList.add('form-loading');
            
            try {
                const response = await fetch('https://formspree.io/f/xjgyonqd', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    // Success
                    messageDiv.className = 'form-message form-success';
                    messageDiv.textContent = 'Thank you for joining our movement! We\'ll be in touch soon.';
                    messageDiv.classList.remove('hidden');
                    
                    // Reset form
                    form.reset();
                    
                    // Scroll to message
                    messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    
                    // Hide message after 8 seconds
                    setTimeout(() => {
                        messageDiv.classList.add('hidden');
                    }, 8000);
                } else {
                    // Server error
                    const data = await response.json();
                    throw new Error(data.error || 'Submission failed. Please try again.');
                }
            } catch (error) {
                // Network or other error
                messageDiv.className = 'form-message form-error';
                messageDiv.textContent = error.message || 'Something went wrong. Please check your connection and try again.';
                messageDiv.classList.remove('hidden');
                
                // Scroll to message
                messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } finally {
                // Remove loading state
                submitBtn.classList.remove('btn-submitting');
                submitBtn.disabled = false;
                form.classList.remove('form-loading');
            }
        });

        // Enhanced Lightbox + API for dynamic galleries
        (function(){
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightbox-img');
            const lightboxCaption = document.getElementById('lightbox-caption');
            const btnClose = document.getElementById('lightbox-close');
            const btnNext = document.getElementById('lightbox-next');
            const btnPrev = document.getElementById('lightbox-prev');
            let srcs = [];
            let captions = [];
            let currentIndex = 0;

            function openAt(i){
                if(!srcs.length) return;
                currentIndex = ((i % srcs.length) + srcs.length) % srcs.length;
                lightboxImg.src = srcs[currentIndex];
                lightboxCaption.textContent = captions[currentIndex] || '';
                lightbox.classList.remove('hidden');
                lightbox.classList.add('flex');
            }

            function close(){
                lightbox.classList.add('hidden');
                lightbox.classList.remove('flex');
                lightboxImg.src = '';
                lightboxCaption.textContent = '';
            }

            btnClose && btnClose.addEventListener('click', close);
            btnNext && btnNext.addEventListener('click', () => openAt(currentIndex + 1));
            btnPrev && btnPrev.addEventListener('click', () => openAt(currentIndex - 1));

            lightbox && lightbox.addEventListener('click', (e) => {
                if(e.target === lightbox) close();
            });

            document.addEventListener('keydown', (e) => {
                if(!lightbox || lightbox.classList.contains('hidden')) return;
                if(e.key === 'Escape') close();
                if(e.key === 'ArrowRight') openAt(currentIndex + 1);
                if(e.key === 'ArrowLeft') openAt(currentIndex - 1);
            });

            // Expose an API to open the lightbox with a custom list of images and captions
            window.openLightbox = function(imagesArray, captionsArray, startIndex){
                srcs = (imagesArray || []).slice();
                captions = (captionsArray || []).slice();
                openAt(startIndex || 0);
            };

            // Wire existing static #gallery images (if present) to the enhanced lightbox
            const staticGallery = Array.from(document.querySelectorAll('#gallery img'));
            if(staticGallery.length){
                const staticSrcs = staticGallery.map(img => img.getAttribute('src'));
                const staticCaps = staticGallery.map(img => img.getAttribute('alt') || '');
                staticGallery.forEach((img, idx) => {
                    img.style.cursor = 'pointer';
                    img.tabIndex = 0;
                    img.addEventListener('click', () => window.openLightbox(staticSrcs, staticCaps, idx));
                    img.addEventListener('keydown', (e) => {
                        if(e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            window.openLightbox(staticSrcs, staticCaps, idx);
                        }
                    });
                });
            }
        })();

        // Paginated Event Gallery (auto-generate captions from filenames)
        (function(){
            const start = 23;
            const end = 63; // inclusive
            const pageSize = 12;
            const thumbsContainer = document.getElementById('event-thumbs');
            const paginationContainer = document.getElementById('event-pagination');
            if(!thumbsContainer || !paginationContainer) return;

            // Build image list
            const eventImages = [];
            for(let i = start; i <= end; i++){
                eventImages.push(`assets/event-${i}.jpg`);
            }

            function captionFromFilename(path){
                const name = path.split('/').pop().replace(/\.[^.]+$/, '');
                // Turn 'event-23' => 'Event 23'
                return name.split('-').map((s, idx) => idx===0? s.charAt(0).toUpperCase()+s.slice(1) : s).join(' ').replace(/event\s+(\d+)/i, 'Event $1');
            }

            const eventCaptions = eventImages.map(captionFromFilename);

            const totalPages = Math.max(1, Math.ceil(eventImages.length / pageSize));
            let currentPage = 1;

            function renderPage(page){
                currentPage = Math.min(Math.max(1, page), totalPages);
                thumbsContainer.innerHTML = '';

                const startIndex = (currentPage - 1) * pageSize;
                const endIndex = Math.min(eventImages.length, startIndex + pageSize);

                for(let i = startIndex; i < endIndex; i++){
                    const src = eventImages[i];
                    const cap = eventCaptions[i];
                    const card = document.createElement('div');
                    card.className = 'bg-white rounded-lg overflow-hidden shadow hover:shadow-lg cursor-pointer';
                    const img = document.createElement('img');
                    img.src = src;
                    img.alt = cap;
                    img.loading = 'lazy';
                    img.className = 'w-full h-48 object-cover img-cover';
                    img.tabIndex = 0;
                    img.addEventListener('keydown', (e) => {
                        if(e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            window.openLightbox(eventImages, eventCaptions, i);
                        }
                    });
                    img.addEventListener('click', () => {
                        window.openLightbox(eventImages, eventCaptions, i);
                    });
                    card.appendChild(img);
                    const captionDiv = document.createElement('div');
                    captionDiv.className = 'p-3 text-center text-sm text-gray-700';
                    captionDiv.textContent = cap;
                    card.appendChild(captionDiv);
                    thumbsContainer.appendChild(card);
                }

                renderPagination();
            }

            function renderPagination(){
                paginationContainer.innerHTML = '';

                const prev = document.createElement('button');
                prev.className = 'px-4 py-2 bg-gray-200 rounded disabled:opacity-50';
                prev.textContent = 'Prev';
                prev.disabled = currentPage === 1;
                prev.addEventListener('click', () => renderPage(currentPage - 1));
                paginationContainer.appendChild(prev);

                // Show up to 7 page buttons centered around current
                const maxButtons = 7;
                const half = Math.floor(maxButtons / 2);
                let startBtn = Math.max(1, currentPage - half);
                let endBtn = Math.min(totalPages, startBtn + maxButtons - 1);
                if(endBtn - startBtn < maxButtons - 1){
                    startBtn = Math.max(1, endBtn - maxButtons + 1);
                }

                for(let p = startBtn; p <= endBtn; p++){
                    const btn = document.createElement('button');
                    btn.className = `px-3 py-2 rounded ${p===currentPage? 'bg-green-700 text-white':'bg-gray-100'}`;
                    btn.textContent = p;
                    btn.addEventListener('click', () => renderPage(p));
                    paginationContainer.appendChild(btn);
                }

                const next = document.createElement('button');
                next.className = 'px-4 py-2 bg-gray-200 rounded disabled:opacity-50';
                next.textContent = 'Next';
                next.disabled = currentPage === totalPages;
                next.addEventListener('click', () => renderPage(currentPage + 1));
                paginationContainer.appendChild(next);
            }

            // Initialize
            renderPage(1);
        })();