---
layout: post
title: "How I Solve AI Coding Costs with Local + Cloud LLMs: Introducing MACA"
date: 2026-11-22
tags: [ai, local-models, coding-assistant, cost-optimization, llm, multi-agent]
image: /assets/images/posts/maca-architecture.png
excerpt: "A practical look at how MACA routes coding tasks across local Gemma and cloud models like Gemini and Claude, using a multi-agent workflow with human-in-the-loop specs and safe staging."
---

AI-assisted coding only becomes sustainable when the economics and quality trade-offs are handled well. The practical answer is not to choose between local intelligence and cloud intelligence. **It is to use both, deliberately.**

At a high level, I work with **two kinds of models**:

- **Local LLMs** running on my laptop or workstation
- **Cloud LLMs** running in hosted API services

**The core idea is simple:** keep routine, low-risk work on the machine I already own, and reserve stronger cloud models for the tasks that genuinely need deeper reasoning.

> **The goal is not to use the biggest model for everything. The goal is to use the right model at the right time.**

<p>
  <img src="{{ '/assets/images/posts/maca-local-vs-cloud.svg' | relative_url }}" alt="Local and cloud LLM routing diagram" class="img-fluid" />
</p>

This is the model I use every day. **It is not about choosing one side of the spectrum.** It is about routing work to the right tier with minimal waste and maximum control.

---

## Two kinds of AI models I rely on

### Local LLMs — fast, offline-ready, free

**Local models run directly on the machine I already own.** They are useful for:

- boilerplate and scaffolding
- small refactors
- file inspection
- tests and simple code generation
- offline work when network connectivity is limited

**The main benefit is practical:** these tasks can be completed **without token usage, API billing, or network dependency.**

### Cloud LLMs — stronger reasoning when needed

**Cloud models are still valuable for:**

- multi-file reasoning
- larger architectural decisions
- complex debugging
- formal technical specifications and deeper code review

**These are the moments where a larger model gives noticeably better results than a local one.**

---

## What MACA is

**Multi-Agent Coding Assistant (MACA)** is the local-first, hybrid CLI assistant I am building to combine local and cloud models into one practical workflow.

### A team of specialized agents, not just a prompt box

MACA is **an agentic AI system**, not a single prompt box. Instead of asking one model to do everything in one shot, it coordinates a small team of specialized agents through a high-level pipeline:

- **Classify & Clarify:** assesses task complexity and, for greenfield projects, asks quick clarifying questions (such as stack, runtime, or build tool) before writing code
- **Plan & Spec:** inspects the workspace, creates a structured plan, and—for medium or complex work—drafts a technical specification and pauses for **human approval** before implementation starts
- **Implement, Verify & Review:** generates code into an **isolated staging area**, checks that every planned step is actually complete, and runs an automated review-and-fix loop
- **Promote Safely:** only applies changes to the real workspace once the review passes, keeping the repository clean until the code is ready

**This matters because software work is rarely a one-shot action.** Real tasks need clarification, planning, verification, and review. Modeling that flow across specialized stages produces far more reliable output than a single monolithic prompt.

### Tiered routing with built-in fallbacks

**Before work begins, MACA's router matches the task's complexity to the right model tier:**

- **Simple tasks** → **Local Gemma via Ollama** (fast, free, on-device)
- **Medium tasks** → **Google Gemini** (fast, strong reasoning)
- **Complex tasks** → **Anthropic Claude** (deepest reasoning for harder architecture and multi-file work)

If a cloud provider or local Ollama instance is offline or unconfigured, MACA falls back gracefully to the next available tier—and you can always override the model manually when you want to.

<p>
  <img src="{{ '/assets/images/posts/maca-architecture.svg' | relative_url }}" alt="MACA high-level architecture diagram" class="img-fluid" />
</p>

This high-level architecture keeps the experience **fast, affordable, and safe in real development work**, with complexity-based routing up front and a clean staging boundary before changes touch the repository.

---

## How I solve the token and cost dilemma

### 1. Solve simple tasks locally — for free

**For straightforward tasks, MACA routes to a local Gemma model running through Ollama.** This is ideal for:

- file inspection
- boilerplate generation
- small refactors
- test scaffolding
- routine code suggestions

**Result:** no token usage, no AI billing, and no external API dependency for routine work.

### 2. Escalate in tiers only when the task demands it

**When the task needs stronger reasoning, MACA steps up to cloud models—Gemini for medium complexity, and Claude for the hardest problems.**

**This is a much better economic model** than sending every request to the most expensive frontier model by default.

### 3. Keep the workspace safe while iterating

**Multi-step agent loops are only useful if they do not leave half-finished code scattered across your repo.** By staging changes, verifying completion, and running an automated review loop before promoting files, MACA keeps iteration contained and predictable.

---

## Why spec-driven development makes this practical

**The real unlock is not just the model itself. It is the way the work is broken down.**

With a spec-driven workflow, work is sliced into **smaller, well-defined tasks**—and for anything non-trivial, you review and approve the specification before code is generated:

- **simple edits** → skip the heavy spec step and stay on the local model
- **medium and complex features** → agree on a clear spec first, then route to the right cloud tier
- **verification and review** → catch missing pieces and quality issues before files ever land in your workspace

**In many real coding sessions, a large share of routine work stays local**, while cloud intelligence is focused where it adds the most value.

---

## Why this works in practice

Splitting work across local and cloud tiers changes the economics and reliability of day-to-day AI coding:

- **Zero token spend on routine work** — local compute handles the high-volume basics
- **Selective cloud usage** — frontier models are reserved for the moments that genuinely need deeper reasoning
- **Human-in-the-loop control** — specs, verification loops, and clean workspace promotion keep agentic runs predictable

**That is why I built MACA.** It is not just another chat wrapper — it is a practical way to make AI coding faster, more affordable, and more sustainable on the machine you already own.

---

## A note on modern hardware (and the path to full privacy)

**The hardware trend is also important here.** High-memory developer machines like the **Microsoft Surface Laptop Ultra**, **Surface RTX Spark Dev Box**, and **Apple M-series Max laptops** with unified memory and strong GPU bandwidth prove that **serious local AI workloads are already practical on real developer hardware.**

**My own experience shows both ends of that spectrum:** MACA is already practical on an **Apple M3 Pro (18GB)** laptop, and on a standalone **Apple M1 Max** I run heavier models locally over **Ollama** and hardly need to touch cloud models at all.

It is worth being honest about privacy today: **as soon as a hybrid workflow escalates a task to a cloud model, it is no longer private.** Today's hybrid approach is primarily about **cost and efficiency**. However, as local hardware gets more compute and memory—and local models keep closing the gap—this same architecture is a natural stepping stone to a future where **all tiers run locally and the entire coding workflow can be genuinely, fully private.**

---

## The takeaway

**The best AI-assisted coding experience is not the one that uses the biggest model for everything.** It is the one that uses the right model at the right time—with the right guardrails around it.

**That is the mindset behind MACA:**

1. **Solve simple tasks on local compute — for free**
2. **Escalate across cloud tiers only when the task really demands it**
3. **Use specs, verification, and staging so agentic workflows stay reliable**

**That is how we make AI coding cheaper, faster, and more trustworthy.**

---

## Try it out & contribute

MACA is open source and in active alpha development on GitHub: **[GSSwain/multi-agent-coding-assistant](https://github.com/GSSwain/multi-agent-coding-assistant)**.

If you're interested in local-first AI workflows, hybrid routing, or multi-agent systems, I'd love your help — **contributions, feedback, bug reports, and PRs are all welcome!**
