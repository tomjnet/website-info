---
title: "Modern C++ Deep Dives: a new YouTube series"
date: 2026-09-29
tags: [c++, youtube, data-structures]
summary: "A new YouTube playlist: 15 short videos on the history of C++ and every standard container - Big-O, memory layout and when to use each."
---

_A new YouTube playlist: 15 short videos on the history of C++ and every standard container._

I created a new YouTube playlist, **Modern C++ Deep Dives**. It is a series of short, focused videos - most of them around ten minutes - that go one level below "just use `std::vector`" and look at what the standard library is actually doing for you.

**Watch the playlist:** [Modern C++ Deep Dives on YouTube](https://www.youtube.com/watch?v=YdI4s5yAXjQ&list=PLeH5z5XH9nXw)

## What's in it

It starts with the big picture and then goes container by container. For each container I cover the Big-O of the common operations, how it lays out data in memory, and the trade-offs that decide when it's the right choice.

1. The History of C++ in 10 Minutes: From Cfront to C++26
2. Every C++ Data Structure Explained: Time and Space Complexity from C++98 to C++26
3. `std::vector` - Big-O, growth and memory layout
4. `std::deque` - Big-O, blocks and memory layout
5. `std::list` - Big-O, nodes and memory layout
6. `std::set` - Big-O, red-black trees and ordered lookup
7. `std::unordered_set` - hashing, buckets and Big-O
8. `std::map` - Big-O, red-black tree and memory layout
9. `std::unordered_map` - hashing, buckets and Big-O
10. `std::stack` - Big-O, adapters and LIFO
11. `std::queue` - adapter, Big-O and backends
12. `std::priority_queue` - Big-O, heaps and memory layout
13. C array and `std::array` - Big-O, decay and bounds
14. `std::string` - Big-O, SSO and memory layout
15. `std::multiset`, `std::multimap`, `equal_range` - Big-O, duplicates and groups

## Who it's for

If you write C++ every day but pick containers out of habit, this series is for you. The Big-O table is only half the story. Cache behaviour, allocation patterns and pointer stability usually decide real-world performance, and every episode keeps coming back to them.

More episodes are coming. If there's a topic you'd like me to go deep on next, leave a comment on the channel.
