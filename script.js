// Function to update the banner slideshow data
function updateBannerSlideshow() {
  // Get the slideshow container
  const slideshowContainer = document.querySelector('[data-controller="UserItemsListBannerSlideshow"]');
  if (!slideshowContainer) {
    console.error('Slideshow container not found');
    return;
  }

  // Get the slides list
  const slidesList = slideshowContainer.querySelector('.slides');
  if (!slidesList) {
    console.error('Slides list not found');
    return;
  }

  // Store the first slide's position
  const firstSlide = slidesList.querySelector('.slide');
  const firstSlideTransform = firstSlide ? firstSlide.style.transform : '';

  // Known content for the slides
  const slidesContent = [
    {
      title: "Whānau Ora: Building Stronger Communities Together",
      description: "Discover how our community-led initiatives are creating lasting change through collaboration, cultural connection, and collective action. Learn about our innovative approaches to supporting whānau wellbeing.",
      buttonText: "Learn More",
      buttonLink: "/news/whanau-ora",
      imageUrl: "https://images.squarespace-cdn.com/content/v1/67f5dd53fc7db23859c4f35a/90fe2fc2-e2e6-43db-b18a-2dda36fdb8a1/Kaia+Banner.jpg",
      imageSize: "6052x2832"
    },
    {
      title: "Innovative Approaches to Mental Health Support",
      description: "Exploring new ways to provide culturally responsive mental health support. Our integrated approach combines traditional knowledge with modern practices to better serve our community.",
      buttonText: "Read More",
      buttonLink: "/news/mental-health",
      imageUrl: "https://images.squarespace-cdn.com/content/v1/67f5dd53fc7db23859c4f35a/f3575fc4-0621-4132-b9b8-a6d48faa061a/Toxic+Stress+03.jpg",
      imageSize: "6549x2832"
    },
    {
      title: "Empowering Youth Through Education and Leadership",
      description: "Our youth leadership program is creating pathways for young people to develop their skills, connect with their culture, and become future leaders in their communities.",
      buttonText: "Find Out More",
      buttonLink: "/news/youth-leadership",
      imageUrl: "https://images.squarespace-cdn.com/content/v1/67f5dd53fc7db23859c4f35a/7f90ee49-ba4d-4e33-9225-ca1912bd51fe/Te+Whare+Piringa+05.jpg",
      imageSize: "6211x2832"
    }
  ];

  // Create new slides
  slidesContent.forEach((item, index) => {
    // Find existing slide or create new one
    let slide = slidesList.children[index];
    if (!slide) {
      slide = document.createElement('li');
      slide.className = 'slide list-item';
      slidesList.appendChild(slide);
    }

    // Update slide attributes
    slide.style.padding = '2%';
    slide.setAttribute('data-is-card-enabled', 'true');
    
    // Set transform for non-first slides
    if (index === 0) {
      slide.style.transform = firstSlideTransform || 'translate3d(0px, 0px, 0px)';
      slide.removeAttribute('aria-hidden');
    } else {
      slide.style.transform = 'translate3d(-9999px, 0px, 0px)';
      slide.setAttribute('aria-hidden', 'true');
    }

    // Update slide content with proper animation classes
    slide.innerHTML = `
      <div class="slide-media-container"> 
        <img alt="${item.title}" 
             src="${item.imageUrl}" 
             class="list-slideshow-image" 
             style="display:block;object-position: 50% 50%;"
             width="${item.imageSize.split('x')[0]}"
             height="${item.imageSize.split('x')[1]}"
             loading="${index === 0 ? 'eager' : 'lazy'}"
             decoding="async">
      </div>
      <div class="slide-content list-item-card-background list-item-rich-animation" 
           style="width: 350px; min-width: 50%; max-width: 100%; padding: 6%; transition-timing-function: ease; transition-duration: 0.6s; transition-delay: ${0.06 + (index * 0.015)}s;">
        <h2 class="list-item-content__title" 
            style="transition-timing-function: ease; transition-duration: 0.6s; transition-delay: ${0.06375 + (index * 0.015)}s;">
          ${item.title}
        </h2>
        <div class="list-item-content__description" style="margin-top: 4%;">
          <p data-rte-preserve-empty="true" 
             style="white-space: pre-wrap; transition-timing-function: ease; transition-duration: 0.6s; transition-delay: ${0.0675 + (index * 0.015)}s;">
            ${item.description}
          </p>
        </div>
        <div class="list-item-content__button-container" 
             style="margin-top: 8%; transition-timing-function: ease; transition-duration: 0.6s; transition-delay: ${0.07125 + (index * 0.015)}s;" 
             data-animation-role="button">
          <a class="list-item-content__button sqs-block-button-element sqs-block-button-element--medium sqs-button-element--primary" 
             href="${item.buttonLink}">
            ${item.buttonText}
          </a>
        </div>
      </div>
    `;
  });

  // Remove any extra slides
  while (slidesList.children.length > slidesContent.length) {
    slidesList.removeChild(slidesList.lastChild);
  }

  // Add event listener for slide changes
  const slides = slidesList.querySelectorAll('.slide');
  slides.forEach((slide, index) => {
    slide.addEventListener('transitionend', () => {
      if (slide.style.transform === 'translate3d(0px, 0px, 0px)') {
        // Add animation classes when slide becomes active
        const content = slide.querySelector('.slide-content');
        const title = slide.querySelector('.list-item-content__title');
        const description = slide.querySelector('.list-item-content__description p');
        const button = slide.querySelector('.list-item-content__button-container');

        if (content) content.classList.add('slideIn');
        if (title) title.classList.add('slideIn');
        if (description) description.classList.add('fadeIn');
        if (button) button.classList.add('slideIn');
      }
    });
  });

  // Force update the first slide's animations
  const firstSlideContent = slides[0].querySelector('.slide-content');
  const firstSlideTitle = slides[0].querySelector('.list-item-content__title');
  const firstSlideDescription = slides[0].querySelector('.list-item-content__description p');
  const firstSlideButton = slides[0].querySelector('.list-item-content__button-container');

  if (firstSlideContent) firstSlideContent.classList.add('slideIn');
  if (firstSlideTitle) firstSlideTitle.classList.add('slideIn');
  if (firstSlideDescription) firstSlideDescription.classList.add('fadeIn');
  if (firstSlideButton) firstSlideButton.classList.add('slideIn');

  console.log('Slideshow updated successfully!');
}

// Make the function available globally
window.updateBannerSlideshow = updateBannerSlideshow; 