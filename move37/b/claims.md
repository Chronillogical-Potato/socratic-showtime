# Claims ledger — Move 37 and the chain of thought

The film is a neutral explanation, not a verdict on whether language models reason. Times below follow the local Kokoro voice timeline; question pauses are three seconds. All factual material comes from the supplied `../shared/facts.md` and the two supplied primary artifacts. Interpretive and illustrative material is explicitly distinguished below.

| Film time | Claim or displayed material | Source and qualification |
|---|---|---|
| 0:00.00–0:11.49 | AlphaGo co-author Thore Graepel argues that language models do not really reason. The film explicitly compares how AlphaGo and language models reach answers, beginning with Move 37. | Supplied fact sheet, “The debate that prompted this video,” and the linked MIT Technology Review article dated 2 October 2026. The claim is attributed, not endorsed. Comparing the methods is the film’s framing, not a claim that one move is the article’s only evidence. |
| 0:00.00–0:22.92 | Seoul; game two; 10 March 2016; AlphaGo Black, Lee Sedol White. | Supplied fact sheet, section “AlphaGo, game 2, Move 37”; attached SGF metadata `DT`, `RO`, `PC`, `PB`, `PW`. Background source: https://deepmind.google/research/alphago/ |
| 0:00.00–0:11.49 | The first 37 stones are placed in the real order; Move 37 is Black P10 on the fifth line beside White Q11. | `../shared/alphago-lee-sedol-game2.sgf`, first 37 nodes. SGF `oj` maps to P10 and `pi` to Q11 with I skipped. A liberty/capture simulation verified there are no captures through move 37. The camera and falling-stone animation are original staging, not documentary footage. |
| 0:11.49–0:22.92 | Q1 answer C: both. The policy network assigned a 1 in 10,000 chance of a human playing Move 37, but search chose it. | https://deepmind.google/research/alphago/ as provided in the fact sheet. The on-screen qualification explicitly identifies the estimate as human move likelihood, not win probability. No other AlphaGo probabilities are shown. |
| 0:17.40–0:22.92 | Policy proposes; value evaluates; AlphaGo combines policy and value networks with tree search. | Silver et al., “Mastering the game of Go with deep neural networks and tree search,” Nature 529, 484–489 (2016), as cited in the fact sheet; https://doi.org/10.1038/nature16961 . The blooming tree is labelled “SEARCH TREE / ILLUSTRATION”; its branches are not actual search telemetry. |
| 0:22.92–0:28.05 | A language model generates text one token at a time, conditioned on text so far. | Supplied fact sheet, section “How an LLM writes.” Animated textual chunks are a retimed presentation, not captured token latencies or a claim about exact tokenizer segmentation. |
| 0:22.92–0:28.05 | Authentic excerpt: “73°W would be further west, into the Pacific Ocean?” | `../shared/reasoning_traces.json`, object `id: coord`, `raw_output`, analysis channel. Attributed on screen “gpt-oss-120b, run locally.” It is labelled unverified model text; its geography is not presented as established fact. |
| 0:33.77–0:40.80 | Authentic excerpt: “Wait, the Pacific is west of Chile.” | Same `coord` run, verbatim contiguous text. The floating word tiles repeat the supplied text as retimed staging, not a record of internal operations. This written self-correction is explicitly not proof that the model checked its claim. Both excerpts are individually under 15 words. |
| 0:35.72–0:40.80 | The local coordinate run answered Water; ground truth is Land for 41° S, 73° W. | Supplied fact sheet, added section dated 4 October 2026; `reasoning_traces.json`, `id: coord`, final channel. Answer key: Natural Earth 1:10m land, as used by https://github.com/FavioVazquez/land-or-water . This is one observed wrong answer, not an error-rate estimate or proof about the existence of reasoning. |
| 0:28.05–0:40.80 | Q2 answer C: partly. A chain can change course and can be sampled many times; nothing in the model forces each step to be checked. | Supplied fact sheet, “How an LLM writes.” “No guaranteed check” summarizes the lack of a guarantee; it does not deny that external verification tools can check steps. |
| 0:40.80–0:57.93 | For 36 + 59, researchers found parallel internal paths for approximate magnitude and the exact final digit; the model described schoolbook carrying when asked for its explanation. Subject: Claude 3.5 Haiku. | Anthropic, “On the Biology of a Large Language Model” (March 2025): https://transformer-circuits.pub/2025/attribution-graphs/biology.html . The diagram is newly drawn and labelled “Original diagram · after Anthropic (2025).” It is an explanatory simplification, not the original attribution graph. The correct arithmetic 36 + 59 = 95, 6 + 9 = 15 and 3 + 5 + 1 = 9 follows the supplied example. |
| 0:57.93–1:15.01 | Q3 answer C: when Claude 3.7 Sonnet used the hint, its reasoning acknowledged it about 25% of the time on average. | Chen et al. (2025), “Reasoning Models Don't Always Say What They Think,” https://arxiv.org/abs/2505.05410 . The 100-dot display illustrates a percentage, not a claim that the study contained 100 trials. The conditional “when the hint was used” and “on average” are retained. |
| 1:15.01–1:27.50 | Graepel's critique: intuition run longer is not a checked, inspectable record. | Supplied fact sheet paraphrase of Thore Graepel, MIT Technology Review, 2 October 2026: https://www.technologyreview.com/2026/10/02/1145639/dont-be-fooled-llms-dont-reason/ . Article statements are attributed argument, not declared consensus. |
| 1:15.01–1:27.50 | Counterargument: humans rationalize too; pencil, paper and scientific checks help people, so why not give models analogous tools? | Supplied fact sheet's account of the 2 October 2026 David Duvenaud ↔ Thore Graepel exchange. Thread anchor supplied: https://x.com/ThoreG/status/2105988456824386034 . Human flaws and tools are presented as the debate's reply. No other X users are named or shown. |
| 1:27.50–1:35.43 | Q4 answer B: a record you can check, and checking it. | Exact prompt, answer and framing mandated by the brief; also motivated by the source exchange above. This is an operational trust criterion, not a proof or conclusion about consciousness or whether present models truly reason. |
| 1:35.43–1:47.63 | “Does a language model reason?”; a checkable record and actual checking offer a way to test the opening claim. | Original open question and operational framing, based on the supplied Graepel/Duvenaud exchange and mandated Q4 answer. No claim that the dispute about reasoning is resolved, or that both sides agree about whether models reason. |

## Artifact provenance and integrity

The reasoning was supplied as a local run of gpt-oss-120b (MXFP4 GGUF), llama-cpp-python 0.3.35, CPU, temperature 0, with the GGUF default chat template. These are source-artifact metadata, not credits identifying the maker of the film. No other run is substituted. Only the two short excerpts listed above are displayed.

The forbidden, unrelated encrypted-trace paper is not used. No invented AlphaGo move probabilities, extra X users, or undocumented performance claims are included.

## Assets and licences

- 3D board, textures, lighting, orbiting cameras, tree, floating text tiles, diagrams, 3D paper/pencil and motion: original procedural artwork for this entry. No external photographs or copied figures.
- three.js: locally vendored installed package, MIT licence; licence retained in the editable project's `vendor/three-LICENSE.txt`. https://threejs.org/ . No network is needed while rendering or playing the exported artifact.
- DM Sans, Bodoni Moda and IBM Plex Mono: locally packaged Fontsource assets, SIL Open Font License 1.1. Fontsource licence files are retained beside the fonts and embedded fonts are used throughout.
- Voice: locally synthesized Kokoro `af_heart`, speed 1 (default), no API keys. Kokoro-82M weights Apache-2.0; kokoro-onnx MIT, as documented by showtime. This is a synthetic narration voice, not a real-person recording.
- Music and stone sounds: original locally generated procedural showtime underscore and click variations; no third-party music track or attribution-required recording is used.
- The end-card identity is only “Socratic #2 · made with showtime” and the requested repository address.

## Supplied input hashes (SHA-256)

- `facts.md`: `c35426dd2c670bf600252ce601e835cf5129ed5d6868b3e4412902f320830746`
- `reasoning_traces.json`: `6390a540bbcab0809860f221af266164c05864b1dfce7bc597553e2d0c293df6`
- `alphago-lee-sedol-game2.sgf`: `66b37779e90e56e56c2928d1a4ae2711a2c8244107455980bf9bb75d66f1d66f`

## Story revision and connective language

The persistent roadmap uses the four requested steps: How AlphaGo found Move 37; How an LLM “thinks”; Is the written reasoning real?; What would make it trustworthy? The active step is highlighted, including during each question.

The spoken bridges connect search with a token-by-token chain; distinguish a correct answer from a faithful account; connect the arithmetic example with reporting a used hint; and connect missing information with the trust criterion. They summarize sourced examples or ask interpretive questions, not additional empirical claims. “New task: land or water?” identifies the geography excerpt as a separate example, not something happening on the Go board. All four exact prompts, choices, answer indices and three-second narration-free pauses are retained. New times are generated from the local voice timeline. The closing returns to the opening claim without declaring whether language models truly reason.
