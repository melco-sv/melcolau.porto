/**
 * Decorative, fixed full-screen backdrop:
 *  - soft animated gradient orbs (aurora)
 *  - faint dot grid
 *  - film grain overlay
 * Pure CSS / no JS, so it stays cheap and can render on the server.
 */
export function SiteBackground() {
  return (
    <div
      aria-hidden
      className="grain pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* base wash */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_-10%,#15131f_0%,#07070b_55%)]" />

      {/* dot grid */}
      <div className="absolute inset-0 opacity-[0.18] [background-image:radial-gradient(rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:34px_34px] [mask-image:radial-gradient(80%_80%_at_50%_30%,#000,transparent)]" />

      {/* aurora orbs */}
      <div className="animate-aurora absolute -top-40 -left-24 h-[40rem] w-[40rem] rounded-full bg-violet/30 blur-[120px]" />
      <div className="animate-float absolute top-1/3 -right-32 h-[34rem] w-[34rem] rounded-full bg-fuchsia/25 blur-[130px]" />
      <div className="animate-aurora absolute -bottom-40 left-1/4 h-[36rem] w-[36rem] rounded-full bg-cyan/20 blur-[140px] [animation-delay:-8s]" />
    </div>
  );
}
