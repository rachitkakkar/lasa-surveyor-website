---
title: "LASA Surveyor"
layout: "page.njk"
eleventyNavigation:
    key: Home
    icon: home
    order: 1
---
<div class="container">
<a href="/projects/compare">
 <div class="banner rounded">
  <h3>New!</h3>
  <p>Click to compare your results from survey #1 with other students!</p>
</div> 
</a>
<div class="card-columns">
{% for post in collections.posts %}
<div class="card">
<img class="card-img-top thumbnail-preview" src="{{ post.data.thumbnail | url }}" alt="Card image cap">
<div class="card-body">
    <h5 class="card-title">{{ post.data.title }}</h5>
    <p class="card-text">{{ post.data.description }}</p>
    <a href="{{ post.url | url }}" class="btn btn-primary rounded">Read More</a>
</div>
</div>
{% endfor %}
</div>
</div>