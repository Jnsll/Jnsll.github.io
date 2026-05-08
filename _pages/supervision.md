---
layout: page
permalink: /students/
title: Supervision
description: Overview of PhD, MSc, BSc, and internship supervisions.
nav: true
nav_order: 6
calendar: false
---

{% assign phd = site.data.supervision.phd %}
{% assign msc = site.data.supervision.msc %}
{% assign bsc = site.data.supervision.bsc %}
{% assign internships = site.data.supervision.internships %}

Supervising students is one of the most rewarding parts of academic life.
Whether at PhD, Master's, Bachelor's, or internship level, I aim to offer
supervision that is **intellectually challenging, practically grounded, and
genuinely supportive**. All topics are connected to my research in sustainable
software engineering and Green AI, but I am open to student-driven proposals
that fall within this space.

Interested in working with me? See the [open opportunities](#opportunities)
at the bottom of this page.


---

<!-- PhD -->
<h2 class="mt-5">
  🎓 PhD Students
  <span class="badge rounded-pill" style="background-color:#007a3d; font-size:0.6em; vertical-align:middle;">
    {{ phd | size }} student{% if phd.size != 1 %}s{% endif %}
  </span>
</h2>
<p class="text-muted mb-3">
  <i class="fa-solid fa-circle-info"></i>
  Doctoral supervision and co-supervision in Green AI and sustainable software engineering.
</p>

{% for student in phd %}
<div class="card mb-3 shadow-sm">
  <div class="card-body">
    <div class="d-flex justify-content-between align-items-start">
      <h5 class="card-title mb-1">{{ student.name }}</h5>
      {% if student.status == "ongoing" %}
        <span class="badge rounded-pill bg-success">Ongoing</span>
      {% else %}
        <span class="badge rounded-pill" style="background-color:#5b7fa6;">Completed</span>
      {% endif %}
    </div>
    <p class="card-text text-muted mb-1" style="font-size:0.9em;">
      <i class="fa-solid fa-microscope"></i> {{ student.topic }}
    </p>
    {% if student.url and student.url != "" %}
        <p class="card-text" style="font-size:0.85em;">
            <i class="fa-solid fa-file-pdf"></i>
            <a href="{{ student.url }}" target="_blank">View thesis</a>
        </p>
    {% endif %}
    <p class="card-text" style="font-size:0.85em;">
      <i class="fa-solid fa-calendar"></i> {{ student.start }}–{{ student.end }}
      &nbsp;|&nbsp;
      <i class="fa-solid fa-location-dot"></i> {{ student.institution }}
      {% if student.co_supervisor and student.co_supervisor != "" %}
        &nbsp;|&nbsp;
        <i class="fa-solid fa-users"></i> Co-supervised with {{ student.co_supervisor }}
      {% endif %}
    </p>
  </div>
</div>
{% endfor %}
 
---

<!-- MSc -->
<h2 class="mt-5">
  📘 MSc Theses
  <span class="badge rounded-pill" style="background-color:#00a6d6; font-size:0.6em; vertical-align:middle;">
   {% if msc.size == 1 %}1 thesis{% else %}{{ msc | size }} theses{% endif %}
  </span>
</h2>

{% for student in msc %}
<div class="card mb-2 shadow-sm">
  <div class="card-body py-2 px-3">
    <div class="d-flex justify-content-between align-items-center">
      <h6 class="mb-0">{{ student.name }}</h6>
      {% if student.status == "ongoing" %}
        <span class="badge rounded-pill bg-success">Ongoing</span>
      {% else %}
        <span class="badge rounded-pill" style="background-color:#5b7fa6;">Completed</span>
      {% endif %}
    </div>
    <p class="text-muted mb-1 mt-1" style="font-size:0.85em;"><i class="fa-solid fa-code"></i>&nbsp;{{ student.topic }}</p>
    <p class="mb-0" style="font-size:0.8em;">
      <i class="fa-solid fa-calendar"></i> {{ student.year }}
      &nbsp;·&nbsp;
      <i class="fa-solid fa-location-dot"></i> {{ student.institution }}
      {% if student.co_supervisor and student.co_supervisor != "" %}
        &nbsp;·&nbsp;<i class="fa-solid fa-users"></i> {{ student.co_supervisor }}
      {% endif %}
      {% if student.url and student.url != "" %}
        &nbsp;·&nbsp;<i class="fa-solid fa-link"></i> <a href="{{ student.url }}" target="_blank">Thesis</a>
      {% endif %}
      {% if student.github and student.github != "" %}
        &nbsp;·&nbsp;<i class="fa-brands fa-github"></i> <a href="{{ student.github }}" target="_blank">GitHub</a>
      {% endif %}
      {% for paper in student.papers %}
        &nbsp;·&nbsp;<i class="fa-solid fa-newspaper"></i> <a href="{{ paper.url }}" target="_blank">Paper {% if student.papers.size > 1 %}{{ forloop.index }}{% endif %}</a>
      {% endfor %}
    </p>
  </div>
</div>
{% endfor %}

---

<!-- BSc -->
<h2 class="mt-5">
  📗 BSc Theses
  <span class="badge rounded-pill" style="background-color:#7b2d8b; font-size:0.6em; vertical-align:middle;">
    {% if bsc.size == 1 %}1 thesis{% else %}{{ bsc | size }} theses{% endif %}
  </span>
</h2>

{% for student in bsc %}
<div class="card mb-2 shadow-sm">
  <div class="card-body py-2 px-3">
    <div class="d-flex justify-content-between align-items-center">
      <h6 class="mb-0">{{ student.name }}</h6>
      {% if student.status == "ongoing" %}
        <span class="badge rounded-pill bg-success">Ongoing</span>
      {% else %}
        <span class="badge rounded-pill" style="background-color:#5b7fa6;">Completed</span>
      {% endif %}
    </div>
    <p class="text-muted mb-1 mt-1" style="font-size:0.85em;"><i class="fa-solid fa-code"></i> &nbsp;{{ student.topic }}</p>
    <p class="mb-0" style="font-size:0.8em;">
      <i class="fa-solid fa-calendar"></i> {{ student.year }}
      &nbsp;·&nbsp;
      <i class="fa-solid fa-location-dot"></i> {{ student.institution }}
      {% if student.co_supervisor and student.co_supervisor != "" %}
        &nbsp;·&nbsp;<i class="fa-solid fa-users"></i> {{ student.co_supervisor }}
      {% endif %}
      {% if student.url and student.url != "" %}
        &nbsp;·&nbsp;<i class="fa-solid fa-link"></i> <a href="{{ student.url }}" target="_blank">Thesis</a>
      {% endif %}
      {% if student.github and student.github != "" %}
        &nbsp;·&nbsp;<i class="fa-brands fa-github"></i> <a href="{{ student.github }}" target="_blank">GitHub</a>
      {% endif %}
      {% for paper in student.papers %}
        &nbsp;·&nbsp;<i class="fa-solid fa-newspaper"></i> <a href="{{ paper.url }}" target="_blank">Paper {% if student.papers.size > 1 %}{{ forloop.index }}{% endif %}</a>
      {% endfor %}
    </p>
  </div>
</div>
{% endfor %}

---

<!-- Internships -->
<h2 class="mt-5">
  🔬 Internships
  <span class="badge rounded-pill" style="background-color:#e05c00; font-size:0.6em; vertical-align:middle;">
    {{ internships | size }} internship{% if internships.size != 1 %}s{% endif %}
  </span>
</h2>

{% for student in internships %}
<div class="card mb-2 shadow-sm">
  <div class="card-body py-2 px-3">
    <div class="d-flex justify-content-between align-items-center">
      <h6 class="mb-0">{{ student.name }}</h6>
      {% if student.status == "ongoing" %}
        <span class="badge rounded-pill bg-success">Ongoing</span>
      {% else %}
        <span class="badge rounded-pill" style="background-color:#5b7fa6;">Completed</span>
      {% endif %}
    </div>
    <p class="text-muted mb-1 mt-1" style="font-size:0.85em;"><i class="fa-solid fa-code"></i>&nbsp;{{ student.topic }}</p>
    <p class="mb-0" style="font-size:0.8em;">
      <i class="fa-solid fa-calendar"></i> {{ student.year }}
      &nbsp;·&nbsp;
      <i class="fa-solid fa-location-dot"></i> {{ student.institution }}
      {% if student.co_supervisor and student.co_supervisor != "" %}
        &nbsp;·&nbsp;<i class="fa-solid fa-users"></i> {{ student.co_supervisor }}
      {% endif %}
      {% if student.url and student.url != "" %}
        &nbsp;·&nbsp;<i class="fa-solid fa-link"></i> <a href="{{ student.url }}" target="_blank">Thesis</a>
      {% endif %}
      {% if student.github and student.github != "" %}
        &nbsp;·&nbsp;<i class="fa-brands fa-github"></i> <a href="{{ student.github }}" target="_blank">GitHub</a>
      {% endif %}
      {% for paper in student.papers %}
        &nbsp;·&nbsp;<i class="fa-solid fa-newspaper"></i> <a href="{{ paper.url }}" target="_blank">Paper {% if student.papers.size > 1 %}{{ forloop.index }}{% endif %}</a>
      {% endfor %}
    </p>
  </div>
</div>
{% endfor %}

---

<h2 class="mt-5" id="opportunities">
  💡 Open Opportunities
  <span class="badge rounded-pill bg-success" style="font-size:0.6em; vertical-align:middle;">Open</span>
</h2>

I am currently open to supervising students at all levels on topics related to:

- **Green AI** — energy profiling of ML models, efficient inference, model compression
- **Sustainable software engineering** — energy code smells, green refactoring, CI/CD energy monitoring
- **Carbon-aware computing** — temporal workload shifting, carbon-aware scheduling
- **Measurement & tooling** — developer tools for energy transparency
- **Communiction & Advocacy** — raising awareness of the environmental cost of computation

If you are a student at **Wageningen University & Research** and looking for a
thesis or internship topic, send me an email with a
short paragraph on which of the above topics draws you in and why.

You can also browse currently listed topics on the dedicated page:
**[View current thesis offers](/thesis-offers/)**.
[Get in touch →](mailto:june.sallou@wur.nl)