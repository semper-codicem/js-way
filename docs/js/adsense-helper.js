// AdSense Helper Functions
window.AdSenseHelper = {
  // Initialize AdSense
  init: function() {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXXX';
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);
  },

  // Create ad unit
  createAd: function(options = {}) {
    const {
      client = 'ca-pub-XXXXXXXXXXXXXXXXX',
      slot = 'XXXXXXXXX',
      format = 'auto',
      style = 'display:block',
      responsive = true,
      className = 'adsense-container'
    } = options;

    const container = document.createElement('div');
    container.className = className;
    
    const ad = document.createElement('ins');
    ad.className = 'adsbygoogle';
    ad.style.cssText = style;
    ad.setAttribute('data-ad-client', client);
    ad.setAttribute('data-ad-slot', slot);
    ad.setAttribute('data-ad-format', format);
    
    if (responsive) {
      ad.setAttribute('data-full-width-responsive', 'true');
    }
    
    container.appendChild(ad);
    
    // Initialize the ad
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.warn('AdSense push failed:', e);
    }
    
    return container;
  },

  // Insert ad after specific element
  insertAfter: function(targetSelector, adOptions) {
    const target = document.querySelector(targetSelector);
    if (target) {
      const ad = this.createAd(adOptions);
      target.parentNode.insertBefore(ad, target.nextSibling);
    }
  },

  // Insert ad before specific element
  insertBefore: function(targetSelector, adOptions) {
    const target = document.querySelector(targetSelector);
    if (target) {
      const ad = this.createAd(adOptions);
      target.parentNode.insertBefore(ad, target);
    }
  },

  // Auto-insert ads in content
  autoInsert: function() {
    // Insert after first h1
    this.insertAfter('h1:first-of-type', {
      format: 'fluid',
      style: 'display:block; text-align:center;'
    });

    // Insert after every 3rd h2
    const h2Elements = document.querySelectorAll('h2');
    h2Elements.forEach((h2, index) => {
      if ((index + 1) % 3 === 0) {
        const ad = this.createAd({
          format: 'rectangle',
          style: 'display:inline-block;width:300px;height:250px'
        });
        h2.parentNode.insertBefore(ad, h2.nextSibling);
      }
    });
  }
};

// Usage examples:
// AdSenseHelper.init();
// AdSenseHelper.autoInsert();
// AdSenseHelper.insertAfter('.markdown-section h1', { format: 'leaderboard' });
