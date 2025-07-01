# Manual AdSense Integration

You can also manually place AdSense ads in your markdown files.

## How to Add Ads Manually

### 1. **In-Content Ads**
Simply add HTML directly in your markdown:

```html
<div class="adsense-container">
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX"
       data-ad-slot="XXXXXXXXX"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
</div>
<script>
  (adsbygoogle = window.adsbygoogle || []).push({});
</script>
```

### 2. **Sidebar Ads**
For sidebar ads, you can modify the `_sidebar.md`:

```html
<!-- In _sidebar.md -->
- [Home](/)
- [Guide](/guide/)

<div class="adsense-sidebar">
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX"
       data-ad-slot="XXXXXXXXX"
       data-ad-format="auto"></ins>
</div>

- [API](/api/)
- [About](/about/)
```

### 3. **Responsive Ad Units**

```html
<!-- Large Rectangle (Desktop) -->
<div class="adsense-container">
  <ins class="adsbygoogle"
       style="display:inline-block;width:336px;height:280px"
       data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX"
       data-ad-slot="XXXXXXXXX"></ins>
</div>

<!-- Responsive Banner -->
<div class="adsense-container">
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX"
       data-ad-slot="XXXXXXXXX"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
</div>
```

## Best Practices

1. **Don't overdo it**: Too many ads hurt user experience
2. **Strategic placement**: After headings, between sections
3. **Mobile-friendly**: Use responsive ad units
4. **Load performance**: Use async loading
