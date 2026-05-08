---
layout: page
permalink: /talks/
title: Talks
#description: Course materials, schedules, and resources for classes taught.
nav: true
nav_order: 7
calendar: false
---

{% assign keynotes = site.data.talks.keynotes | reverse %}
{% assign invited_talks = site.data.talks.invited_talks %}
{% assign conference_talks = site.data.talks.conference_talks | reverse %}
{% assign seminar_talks = site.data.talks.seminar_talks | reverse %}

<h2 class="mt-5">
  🎤 Keynote Talks
  <span class="badge rounded-pill" style="background-color:#007a3d; font-size:0.6em; vertical-align:middle;">
    {{ keynotes | size }} talk{% if keynotes.size != 1 %}s{% endif %}
  </span>
</h2>

{% for talk in keynotes %}
<div class="card mb-2 shadow-sm">
  <div class="card-body py-2 px-3">
    <div class="d-flex justify-content-between align-items-center">
      <h6 class="mb-0">{{ talk.role }}</h6>
      {% if talk.status == "ongoing" %}
        <span class="badge rounded-pill bg-success">Upcoming</span>
      {% else %}
        <span class="badge rounded-pill" style="background-color:#5b7fa6;">Completed</span>
      {% endif %}
    </div>
    <p class="text-muted mb-1 mt-1" style="font-size:0.85em;">
      <i class="fa-solid fa-microphone-lines"></i>&nbsp;"{{ talk.title }}"
    </p>
    {% if talk.abstract and talk.abstract != "" %}
      <details class="mb-1">
        <summary style="font-size:0.8em; cursor:pointer; color: var(--global-theme-color);">
          <i class="fa-regular fa-file-lines"></i> Abstract
        </summary>
        <p class="text-muted mb-0 mt-1" style="font-size:0.82em;">
          {{ talk.abstract }}
        </p>
      </details>
    {% endif %}
    <p class="mb-0" style="font-size:0.8em;">
      <i class="fa-solid fa-calendar"></i> {{ talk.date }}
      &nbsp;·&nbsp;
      <i class="fa-solid fa-location-dot"></i> {{ talk.location }}
      &nbsp;·&nbsp;
      <i class="fa-solid fa-building-columns"></i> {{ talk.venue }}
      {% if talk.url and talk.url != "" %}
        &nbsp;·&nbsp;
        <i class="fa-solid fa-link"></i> <a href="{{ talk.url }}" target="_blank">Event page</a>
      {% endif %}
      {% if talk.slides_url and talk.slides_url != "" %}
        &nbsp;·&nbsp;
        <i class="fa-solid fa-file-pdf"></i> <a href="{{ talk.slides_url }}" target="_blank">Slides</a>
      {% elsif talk.slides_path and talk.slides_path != "" %}
        &nbsp;·&nbsp;
        <i class="fa-solid fa-file-pdf"></i> <a href="{{ talk.slides_path | relative_url }}" target="_blank">Slides</a>
      {% elsif talk.slides_file and talk.slides_file != "" %}
        &nbsp;·&nbsp;
        <i class="fa-solid fa-file-pdf"></i> <a href="{{ '/assets/pdf/' | append: talk.slides_file | relative_url }}" target="_blank">Slides</a>
      {% endif %}
    </p>
  </div>
</div>
{% endfor %}

<h2 class="mt-5">
  🤝 Invited Talks
  <span class="badge rounded-pill" style="background-color:#00a6d6; font-size:0.6em; vertical-align:middle;">
    {{ invited_talks | size }} talk{% if invited_talks.size != 1 %}s{% endif %}
  </span>
</h2>

{% for talk in invited_talks %}
<div class="card mb-2 shadow-sm">
  <div class="card-body py-2 px-3">
    <div class="d-flex justify-content-between align-items-center">
      <h6 class="mb-0">{{ talk.role }}</h6>
      {% if talk.status == "ongoing" %}
        <span class="badge rounded-pill bg-success">Upcoming</span>
      {% else %}
        <span class="badge rounded-pill" style="background-color:#5b7fa6;">Completed</span>
      {% endif %}
    </div>
    <p class="text-muted mb-1 mt-1" style="font-size:0.85em;">
      <i class="fa-solid fa-microphone-lines"></i>&nbsp;"{{ talk.title }}"
    </p>
    {% if talk.abstract and talk.abstract != "" %}
      <details class="mb-1">
        <summary style="font-size:0.8em; cursor:pointer; color: var(--global-theme-color);">
          <i class="fa-regular fa-file-lines"></i> Abstract
        </summary>
        <p class="text-muted mb-0 mt-1" style="font-size:0.82em;">
          {{ talk.abstract }}
        </p>
      </details>
    {% endif %}
    <p class="mb-0" style="font-size:0.8em;">
      <i class="fa-solid fa-calendar"></i> {{ talk.date }}
      &nbsp;·&nbsp;
      <i class="fa-solid fa-location-dot"></i> {{ talk.location }}
      &nbsp;·&nbsp;
      <i class="fa-solid fa-building-columns"></i> {{ talk.venue }}
      {% if talk.url and talk.url != "" %}
        &nbsp;·&nbsp;
        <i class="fa-solid fa-link"></i> <a href="{{ talk.url }}" target="_blank">Event page</a>
      {% endif %}
      {% if talk.slides_url and talk.slides_url != "" %}
        &nbsp;·&nbsp;
        <i class="fa-solid fa-file-pdf"></i> <a href="{{ talk.slides_url }}" target="_blank">Slides</a>
      {% elsif talk.slides_path and talk.slides_path != "" %}
        &nbsp;·&nbsp;
        <i class="fa-solid fa-file-pdf"></i> <a href="{{ talk.slides_path | relative_url }}" target="_blank">Slides</a>
      {% elsif talk.slides_file and talk.slides_file != "" %}
        &nbsp;·&nbsp;
        <i class="fa-solid fa-file-pdf"></i> <a href="{{ '/assets/pdf/' | append: talk.slides_file | relative_url }}" target="_blank">Slides</a>
      {% endif %}
    </p>
  </div>
</div>
{% endfor %}

<h2 class="mt-5">
  🧾 Conference Talks
  <span class="badge rounded-pill" style="background-color:#7b2d8b; font-size:0.6em; vertical-align:middle;">
    {{ conference_talks | size }} talk{% if conference_talks.size != 1 %}s{% endif %}
  </span>
</h2>

{% for talk in conference_talks %}
<div class="card mb-2 shadow-sm">
  <div class="card-body py-2 px-3">
    <div class="d-flex justify-content-between align-items-center">
      <h6 class="mb-0">{{ talk.role }}</h6>
      {% if talk.status == "ongoing" %}
        <span class="badge rounded-pill bg-success">Upcoming</span>
      {% else %}
        <span class="badge rounded-pill" style="background-color:#5b7fa6;">Completed</span>
      {% endif %}
    </div>
    <p class="text-muted mb-1 mt-1" style="font-size:0.85em;">
      <i class="fa-solid fa-microphone-lines"></i>&nbsp;"{{ talk.title }}"
    </p>
    {% if talk.abstract and talk.abstract != "" %}
      <details class="mb-1">
        <summary style="font-size:0.8em; cursor:pointer; color: var(--global-theme-color);">
          <i class="fa-regular fa-file-lines"></i> Abstract
        </summary>
        <p class="text-muted mb-0 mt-1" style="font-size:0.82em;">
          {{ talk.abstract }}
        </p>
      </details>
    {% endif %}
    <p class="mb-0" style="font-size:0.8em;">
      <i class="fa-solid fa-calendar"></i> {{ talk.date }}
      &nbsp;·&nbsp;
      <i class="fa-solid fa-location-dot"></i> {{ talk.location }}
      &nbsp;·&nbsp;
      <i class="fa-solid fa-building-columns"></i> {{ talk.venue }}
      {% if talk.url and talk.url != "" %}
        &nbsp;·&nbsp;
        <i class="fa-solid fa-link"></i> <a href="{{ talk.url }}" target="_blank">Event page</a>
      {% endif %}
      {% if talk.slides_url and talk.slides_url != "" %}
        &nbsp;·&nbsp;
        <i class="fa-solid fa-file-pdf"></i> <a href="{{ talk.slides_url }}" target="_blank">Slides</a>
      {% elsif talk.slides_path and talk.slides_path != "" %}
        &nbsp;·&nbsp;
        <i class="fa-solid fa-file-pdf"></i> <a href="{{ talk.slides_path | relative_url }}" target="_blank">Slides</a>
      {% elsif talk.slides_file and talk.slides_file != "" %}
        &nbsp;·&nbsp;
        <i class="fa-solid fa-file-pdf"></i> <a href="{{ '/assets/pdf/' | append: talk.slides_file | relative_url }}" target="_blank">Slides</a>
      {% endif %}
    </p>
  </div>
</div>
{% endfor %}

<h2 class="mt-5">
  🏛️ Seminar Talks
  <span class="badge rounded-pill" style="background-color:#e05c00; font-size:0.6em; vertical-align:middle;">
    {{ seminar_talks | size }} talk{% if seminar_talks.size != 1 %}s{% endif %}
  </span>
</h2>

{% for talk in seminar_talks %}
<div class="card mb-2 shadow-sm">
  <div class="card-body py-2 px-3">
    <div class="d-flex justify-content-between align-items-center">
      <h6 class="mb-0">{{ talk.role }}</h6>
      {% if talk.status == "ongoing" %}
        <span class="badge rounded-pill bg-success">Upcoming</span>
      {% else %}
        <span class="badge rounded-pill" style="background-color:#5b7fa6;">Completed</span>
      {% endif %}
    </div>
    <p class="text-muted mb-1 mt-1" style="font-size:0.85em;">
      <i class="fa-solid fa-microphone-lines"></i>&nbsp;"{{ talk.title }}"
    </p>
    {% if talk.abstract and talk.abstract != "" %}
      <details class="mb-1">
        <summary style="font-size:0.8em; cursor:pointer; color: var(--global-theme-color);">
          <i class="fa-regular fa-file-lines"></i> Abstract
        </summary>
        <p class="text-muted mb-0 mt-1" style="font-size:0.82em;">
          {{ talk.abstract }}
        </p>
      </details>
    {% endif %}
    <p class="mb-0" style="font-size:0.8em;">
      <i class="fa-solid fa-calendar"></i> {{ talk.date }}
      &nbsp;·&nbsp;
      <i class="fa-solid fa-location-dot"></i> {{ talk.location }}
      &nbsp;·&nbsp;
      <i class="fa-solid fa-building-columns"></i> {{ talk.venue }}
      {% if talk.url and talk.url != "" %}
        &nbsp;·&nbsp;
        <i class="fa-solid fa-link"></i> <a href="{{ talk.url }}" target="_blank">Event page</a>
      {% endif %}
      {% if talk.slides_url and talk.slides_url != "" %}
        &nbsp;·&nbsp;
        <i class="fa-solid fa-file-pdf"></i> <a href="{{ talk.slides_url }}" target="_blank">Slides</a>
      {% elsif talk.slides_path and talk.slides_path != "" %}
        &nbsp;·&nbsp;
        <i class="fa-solid fa-file-pdf"></i> <a href="{{ talk.slides_path | relative_url }}" target="_blank">Slides</a>
      {% elsif talk.slides_file and talk.slides_file != "" %}
        &nbsp;·&nbsp;
        <i class="fa-solid fa-file-pdf"></i> <a href="{{ '/assets/pdf/' | append: talk.slides_file | relative_url }}" target="_blank">Slides</a>
      {% endif %}
    </p>
  </div>
</div>
{% endfor %}