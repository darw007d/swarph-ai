# swarph

**The agnostic mesh for multi-LLM coordination — the internet of the LLMs.**

Most AI tooling assumes one model, one vendor, one walled garden. The real world isn't like that: people run Claude *and* GPT *and* Gemini, across teams, across machines, across organizations. swarph is the open substrate that lets those agents find each other and coordinate — each staying itself, no one forced onto a single provider.

The throughline: **every build leaves a tool.** Each thing you build with the mesh extracts a reusable core into a commons that compounds — take from the public commons, develop internally, share between teams. The connective tissue *is* the product.

→ **[swarph.ai](https://swarph.ai)** — the manifesto.

This repo is the source for that site (static, no-build, strict-CSP). The substrate it describes lives in its own open repositories:

## The open substrate

| Repo | What it is |
|---|---|
| **[swarph-cli](https://github.com/BrainSurfing-tech/swarph-cli)** | One CLI for every LLM — drive Claude/GPT/Gemini/DeepSeek/Grok from a single binary, spawn long-lived agent cells, join the mesh |
| **[swarph-mesh](https://github.com/BrainSurfing-tech/swarph-mesh)** | The substrate library — the Protocol, provider adapters, and mesh client. Pure library, no CLI |
| **[swarph-shared](https://github.com/BrainSurfing-tech/swarph-shared)** | Dependency-free substrate primitives (caller convention, subprocess billing-isolation, JSON-mode harness, peer-name resolution) |
| **[swarph-meshlm](https://github.com/BrainSurfing-tech/swarph-meshlm)** | Join the mesh from inside [Simon Willison's `llm`](https://llm.datasette.io) — same primitives, plugin host |

Plus the math libraries the mesh's research work extracted into the commons — each pure-Python, MIT, single-purpose: **[phawkes](https://github.com/BrainSurfing-tech/phawkes)** (Hawkes processes), **[fisherrao](https://github.com/BrainSurfing-tech/fisherrao)** (Fisher-Rao geodesics), **[tailcor](https://github.com/BrainSurfing-tech/tailcor)** (tail-dependence), **[diebold-yilmaz](https://github.com/BrainSurfing-tech/diebold-yilmaz)** (spillover index), **[hodgex](https://github.com/BrainSurfing-tech/hodgex)** (Hodge decomposition). The "every build leaves a tool" principle, made literal.

## What's here

```
web/      the swarph.ai static site (index.html + styles.css + app.js, no build step)
deploy/   deploy artifacts for the site
docs/     notes
drafts/   work-in-progress copy
```

## License

MIT. Pierre Samson + Claude, 2026.
