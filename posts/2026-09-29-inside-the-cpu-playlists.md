---
title: "Inside the CPU: how the processor talks to everything else"
date: 2026-09-29
tags: [cpu, hardware, low-latency, youtube]
summary: "A long YouTube series on the CPU and how it interacts with memory, devices and accelerators - split into 12 topic playlists."
---

_A long YouTube series on the CPU and how it interacts with memory, devices and accelerators._

**Inside the CPU** is the longest series on my YouTube channel. It goes into the details of how the processor works and how it interacts with everything around it: caches and memory, interrupts and timers, PCIe devices, disks, network cards and GPUs.

The material comes from my old notes, collected over years of working on systems and low-latency code. I'm moving those notes into video form. The series grew too big for one playlist, so I split it into separate topic playlists (about 118 videos in total). Each playlist stands on its own, so you can jump straight to the part you care about.

## The core: instructions, memory and scheduling

- [x86 Assembly Lab](https://www.youtube.com/playlist?list=PLEZNzxHjFcvI) - 9 videos
- [Cache and NUMA Lab](https://www.youtube.com/playlist?list=PLWCL6v3rXnow) - 8 videos
- [Memory Lab](https://www.youtube.com/playlist?list=PLAXxlyBAQ0dw) - 10 videos
- [Scheduler and CPU Affinity Lab](https://www.youtube.com/playlist?list=PLcOEICst3kKY) - 10 videos
- [Interrupts and Timers Lab](https://www.youtube.com/playlist?list=PLY7-VfGXnCjQ) - 9 videos

## Peripherals and I/O

- [PCIe and DMA Lab](https://www.youtube.com/playlist?list=PLaQaz8DfBFBQ) - 9 videos
- [Storage and Disk Lab](https://www.youtube.com/playlist?list=PLR4tsKfefxPQ) - 10 videos
- [Networking and NIC Lab](https://www.youtube.com/playlist?list=PLaF7jPLklev8) - 10 videos

## Accelerators

- [GPU Architecture Lab](https://www.youtube.com/playlist?list=PLY6pC7C5Y7h0) - 12 videos
- [GPU and Accelerator Lab](https://www.youtube.com/playlist?list=PLe4RHMvRpwU4) - 10 videos
- [NVIDIA CUDA Lab](https://www.youtube.com/playlist?list=PLeXZDfjoEVDc) - 12 videos

## Putting it together

- [Low Latency C++ Lab](https://www.youtube.com/playlist?list=PLLGnWhmK6EFo) - 9 videos

## Where to start

If you're new to this, start with the x86 Assembly and Cache and NUMA playlists. Almost everything later builds on them. If you care about latency, the path from Interrupts and Timers through PCIe and DMA to the Networking and NIC Lab shows how a packet actually reaches your code.

I'm still moving the rest of my notes over, so expect more playlists. For the C++ side, see my other series, [Modern C++ Deep Dives](./2026-09-29-modern-cpp-deep-dives-playlist.md).
