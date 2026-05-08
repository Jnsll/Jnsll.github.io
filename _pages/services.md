---
layout: page
title: Academic Services
permalink: /services/
nav: false
---

{% assign sections = site.data.services.sections %}
{% assign total_entries = 0 %}
{% for section in sections %}
{% for group in section.groups %}
{% assign total_entries = total_entries | plus: group.items.size %}
{% endfor %}
{% endfor %}

<h2 class="mt-5">
  🎓 Service Overview
  <span class="badge rounded-pill" style="background-color:#007a3d; font-size:0.6em; vertical-align:middle;">
    {{ total_entries }} item{% if total_entries != 1 %}s{% endif %}
  </span>
</h2>

<p class="text-muted mb-3" style="font-size:0.9em;">
  Academic service activities across organization, program committees, reviewing, and community roles.
</p>

{% for section in sections %}
{% assign section_count = 0 %}
{% for group in section.groups %}
{% assign section_count = section_count | plus: group.items.size %}
{% endfor %}

<h2 class="mt-4">
  <i class="{{ section.icon }}"></i> {{ section.title }}
  <span class="badge rounded-pill" style="background-color:{{ section.badge_color }}; font-size:0.6em; vertical-align:middle;">
    {{ section_count }} item{% if section_count != 1 %}s{% endif %}
  </span>
</h2>

{% for group in section.groups %}
<p class="text-muted mb-2 mt-3" style="font-size:0.9em;">
  <i class="fa-solid fa-layer-group"></i> {{ group.title }}
</p>

{% for entry in group.items %}
<div class="card mb-2 shadow-sm">
  <div class="card-body py-2 px-3">
    <h6 class="mb-1">{{ entry.name }}</h6>
    {% if entry.url and entry.url != "" %}
    <p class="mb-1" style="font-size:0.8em;">
      <i class="fa-solid fa-link"></i> <a href="{{ entry.url }}" target="_blank">Event website</a>
    </p>
    {% endif %}
    {% if entry.note and entry.note != "" %}
    <p class="mb-1 text-muted" style="font-size:0.8em;">
      <i class="fa-solid fa-circle-info"></i> {{ entry.note }}
    </p>
    {% endif %}
    <p class="mb-0 text-muted" style="font-size:0.82em;">
      {% for detail in entry.details %}
      {{ detail }}{% unless forloop.last %} &nbsp;·&nbsp; {% endunless %}
      {% endfor %}
    </p>
  </div>
</div>
{% endfor %}
{% endfor %}
{% endfor %}
