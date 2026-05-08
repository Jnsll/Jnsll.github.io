---
layout: page
title: Media and Outreach
permalink: /media/
nav: false
---

{% assign sections = site.data.media.sections %}
{% assign total_items = 0 %}
{% for section in sections %}
{% assign total_items = total_items | plus: section.items.size %}
{% endfor %}

<p class="text-muted mt-2 mb-3" style="font-size:0.9em;">
  Selected press and outreach coverage.
  <span class="badge rounded-pill" style="background-color:#007a3d; font-size:0.75em; vertical-align:middle;">
    {{ total_items }} item{% if total_items != 1 %}s{% endif %}
  </span>
</p>

{% for section in sections %}
<h2 class="mt-4">
  <i class="{{ section.icon }}"></i> {{ section.title }}
  <span class="badge rounded-pill" style="background-color:{{ section.badge_color }}; font-size:0.6em; vertical-align:middle;">
    {{ section.items | size }} item{% if section.items.size != 1 %}s{% endif %}
  </span>
</h2>

{% for item in section.items %}
<div class="card mb-2 shadow-sm">
  <div class="card-body py-2 px-3">
    <h6 class="mb-1">
      <a href="{{ item.url }}" target="_blank">{{ item.title }}</a>
    </h6>
    <p class="mb-0 text-muted" style="font-size:0.82em;">
      {{ item.outlet }}{% if item.author and item.author != "" %} &nbsp;·&nbsp; {{ item.author }}{% endif %} &nbsp;·&nbsp; {{ item.date }}
    </p>
  </div>
</div>
{% endfor %}
{% endfor %}
