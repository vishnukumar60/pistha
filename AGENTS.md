<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio architecture
- Keep resume-backed content in `src/data/portfolio.ts` and presentation in focused portfolio components, so facts are maintained once.
- Render the portfolio at `/` with in-page section anchors, because this portfolio explicitly requires one smooth-scrolling page.
- Keep interactive state client-side and derive theme after hydration; this static portfolio requires no backend and must preserve SSR compatibility.
- Define material, color, shadow and responsive treatment centrally in `src/styles.css`, so every section follows one theme-aware design system.
- Keep uploaded portfolio photos in Lovable Assets and reference their checked-in asset pointers, so the source tree stays free of uploaded binary files.
