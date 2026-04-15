---
title: "Spec-Driven Development: a practical guide"
date: "2026-04-14"
excerpt: "Scrum was built for a world where writing code was the bottleneck. With AI, the bottleneck has shifted to clarity and processes should too."
tags:
  - AI
  - Engineering
  - Process
  - Leadership
---

*Developers have already moved on. The companies have not.*

---

If you have been in software development long enough, you have probably witnessed the full lifecycle of a methodology hype. Waterfall was "the way." Then Agile came and saved us all. Then Scrum became the golden standard, and suddenly every team had a Scrum Master, a Product Owner, two-week sprints, and a daily standup that nobody wanted to attend. Throughout my career, I have been part of teams running every flavor of Agile you can imagine — SAFe, Scrum, Scrumban, you name it. And here is the thing I have been noticing more and more: the developers have already moved on. The companies have not.

---

## The elephant in the standup

Developers are using AI. Not in some theoretical, "we are exploring the possibilities" kind of way. They are using it right now, today, to write code, to debug, to generate tests, to scaffold entire features. The individual productivity boost is not incremental — it is dramatic. A developer with a good AI setup and a clear spec can mass-produce in a day what used to take a sprint.

And what are most companies doing about this? Running the same two-week Scrum ceremonies they ran in 2019. Sprint planning on Monday, grooming on Wednesday, retro on Friday, repeat forever. The process was designed for a world where the bottleneck was developer output. That bottleneck has shifted. Today, the bottleneck is **clarity** — knowing *what* to build and *why*, with enough precision that both a human and an AI can act on it.

Scrum does not solve for clarity. It solves for coordination and rhythm. And when the rhythm no longer matches the pace of actual delivery, you get what I see on most projects now: developers finishing their sprint work by Wednesday, then either sandbagging or picking up random tasks that were never properly defined. The sprint becomes a container for busywork, not a tool for delivery.

---

## Why Scrum became obsolete (and nobody wants to say it)

Scrum's core assumption — that you need a fixed timebox to plan, execute, and review a small batch of work — made perfect sense when writing code was the slow, expensive part. You needed the ceremonies because the cost of building the wrong thing was measured in weeks of developer time.

Now? Building the wrong thing still costs you, but the building part is fast. The cost has shifted upstream — to the specification. A vague user story that says "As a user, I want to filter products so that I can find what I need" is useless to a developer working with AI. What filters? What products? What does "find" mean? Which API? What are the edge cases? The AI does not guess well. Neither does the developer, but at least the developer will come and ask you. The AI will just confidently build the wrong thing.

Scrum never really forced anyone to answer these questions properly. The "Definition of Ready" was always the neglected sibling of the "Definition of Done." Teams paid lip service to it. The real conversation happened during development, in Slack threads, in "quick calls" that were never quick. And that was... fine, when the development itself was the long pole. But now the long pole is the thinking, the specifying, the deciding.

---

## The fix is simpler than you think

You do not need to throw everything away. You do not need a new framework, a new certification, or a new consulting engagement. Here is what you need: switch to Kanban, and add two columns.

That is it. Seriously.

Your board should look something like this: **Backlog → Spec Ready → In Progress → Spec Review → Done**.

**Spec Ready** means that a task has a specification detailed enough that a developer (with AI assistance) can pick it up and build it without playing twenty questions. Not a novel — a clear, actionable spec. Inputs, outputs, edge cases, dependencies, acceptance criteria that actually mean something.

**Spec Review** means the finished work is reviewed not just for code quality, but against the spec itself. Does what was built match what was specified? If not, where did it diverge, and was that divergence intentional or a misunderstanding?

The flow of responsibility goes like this: the Product Manager writes the initial spec. They own the "what" and the "why." Then the Engineering Manager or the developer who will own the implementation continues the spec — they add the "how," the technical approach, the edge cases the PM might not think of, the integration points. The PM then reviews and approves the final spec before it moves to "Spec Ready."

This is not waterfall. This is not "write a 50-page requirements document." This is a focused, collaborative handshake between product and engineering *before* anyone writes a line of code. The spec might be half a page. But it is a *clear* half a page.

---

## Why this works with AI (and Scrum does not)

When a developer sits down with AI to build a feature, the quality of the output is directly proportional to the quality of the input. Garbage spec in, garbage code out — at incredible speed. A good spec, on the other hand, becomes almost like a prompt for development. The developer feeds the context to the AI, iterates rapidly, and the spec serves as the acceptance test.

Scrum's ceremonies do not produce this artifact. Sprint planning produces commitment to vague stories. Grooming produces slightly less vague stories. The spec — the actual, detailed, "here is what we are building" document — was always someone else's problem. With AI in the picture, that "someone else's problem" has become everyone's problem, because now it is the single biggest determinant of velocity and quality.

Kanban, by contrast, does not care about timeboxes. It cares about flow. A task moves from left to right when it is ready, not when the calendar says so. If a spec takes three days to get right, it takes three days. If a developer finishes building in four hours because the spec was clear and AI did the heavy lifting, great — pull the next card. No waiting for sprint boundaries. No artificial batching.

---

## The real resistance

"But we need sprints for predictability. Management needs to know when things will be done." Sure. But how predictable are your sprints actually? How often does the team commit to X points and deliver X points? In my experience, the answer ranges from "sometimes" to "we stopped tracking because it was depressing."

Kanban with proper specs gives you something better than predictable sprints — it gives you predictable *tasks*. When a spec is clear, estimating it becomes almost trivial. The uncertainty that plagued sprint planning ("well, it depends on what the PM actually means by...") disappears when the spec is already written and approved.

The real resistance is not about predictability. It is about comfort. Scrum is familiar. People have titles built around it. There are entire careers in "Agile coaching." Suggesting that the emperor has no clothes is not popular. But if you look at the teams that are actually shipping fast with AI, you will notice something: most of them already abandoned Scrum quietly. They just did not announce it.

---

## How to start

If you are a PM: start writing specs before throwing tasks over the wall. Not epics, not themes, not "initiatives." Specs. Concrete, detailed, "a developer could build this today" specs.

If you are an EM or tech lead: when a spec lands on your plate, add the technical layer. What services are involved? What is the data model? What are the failure modes? Then hand it back to the PM for approval.

If you are a developer: demand specs. Stop accepting vague tickets and filling in the gaps yourself during development. Your time is better spent building than guessing, and your AI tools are useless without clarity.

If you are running the process: just move the board to Kanban. Add the two columns. Try it for a month. I promise you, the first thing you will notice is that the bottleneck becomes visible — and it is not development. It is specification. And once you can see the bottleneck, you can fix it.

---

*Welcome to spec-driven development. The ceremony is over. The work can begin.*
