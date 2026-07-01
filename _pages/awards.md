---
layout: page
permalink: /awards/
title: Awards
#description: Course materials, schedules, and resources for classes taught.
nav: false
nav_order: 7
calendar: false
---

{% assign categories = site.data.awards.categories %}
{% assign total_awards = 0 %}
{% for category in categories %}
{% assign total_awards = total_awards | plus: category.awards.size %}
{% endfor %}

<h2 class="mt-5">
  🏆 Awards
  <span class="badge rounded-pill" style="background-color:#007a3d; font-size:0.6em; vertical-align:middle;">
    {{ total_awards }} award{% if total_awards != 1 %}s{% endif %}
  </span>
</h2>

{% for category in categories %}
  <h2 class="mt-4">
    <i class="{{ category.icon }}"></i> {{ category.title }}
    <span class="badge rounded-pill" style="background-color:{{ category.badge_color }}; font-size:0.6em; vertical-align:middle;">
      {{ category.awards | size }} award{% if category.awards.size != 1 %}s{% endif %}
    </span>
  </h2>

{% for award in category.awards %}
  <div class="card mb-2 shadow-sm">
    <div class="card-body py-2 px-3">
      <div class="d-flex justify-content-between align-items-center">
        <h6 class="mb-0">{{ award.name }}</h6>
        <span class="badge rounded-pill" style="background-color:#5b7fa6;">{{ award.year }}</span>
      </div>
      <p class="text-muted mb-1 mt-1" style="font-size:0.85em;">
        <i class="{{ category.icon }}"></i>&nbsp;{{ award.item }}
      </p>
      <p class="mb-0" style="font-size:0.8em;">
        <i class="{{ award.context_icon }}"></i> {{ award.context }}
      </p>
    </div>
  </div>
  {% endfor %}
{% endfor %}
