import { useEffect, useRef, useState } from "react";

export function HeavenBackdrop() {
  return (
    <div className="heaven-backdrop" aria-hidden="true">
      <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="heaven-sky" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#efc9e9"/><stop offset=".35" stopColor="#ffe4e2"/><stop offset=".7" stopColor="#fff2d9"/><stop offset="1" stopColor="#e8c8e5"/></linearGradient>
          <radialGradient id="heaven-light"><stop stopColor="#fffef5" stopOpacity="1"/><stop offset=".2" stopColor="#fff4dc" stopOpacity=".9"/><stop offset="1" stopColor="#fff2df" stopOpacity="0"/></radialGradient>
          <linearGradient id="heaven-stair" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#fff8ea" stopOpacity=".05"/><stop offset="1" stopColor="#fff8ef" stopOpacity=".58"/></linearGradient>
          <linearGradient id="heaven-cloud"><stop stopColor="#fffaff" stopOpacity=".2"/><stop offset=".5" stopColor="#fff8fb" stopOpacity=".9"/><stop offset="1" stopColor="#f4ddf0" stopOpacity=".35"/></linearGradient>
          <filter id="cloud-soft"><feGaussianBlur stdDeviation="13"/></filter>
          <filter id="heaven-glow"><feGaussianBlur stdDeviation="28"/></filter>
        </defs>
        <rect width="1440" height="900" fill="url(#heaven-sky)"/>
        <path d="M720 0 475 860h490Z" fill="#fff8e7" opacity=".16"/>
        <path d="M720 0 295 850h180L720 0ZM720 0l425 850h-180L720 0Z" fill="#fffdf3" opacity=".16"/>
        <ellipse cx="720" cy="365" rx="360" ry="310" fill="url(#heaven-light)"/>
        <circle cx="720" cy="326" r="115" fill="#fff8e9" opacity=".7" filter="url(#heaven-glow)"/>
        <circle cx="720" cy="326" r="84" fill="url(#heaven-light)"/>
        <path d="M318 900V430Q318 142 720 104Q1122 142 1122 430V900M354 900V443Q354 183 720 145Q1086 183 1086 443V900" fill="none" stroke="#fff9ef" strokeWidth="5" opacity=".32"/>
        <path d="M411 900V465Q411 234 720 193Q1029 234 1029 465V900" fill="none" stroke="#dcaed0" strokeWidth="2" opacity=".26"/>
        <path d="M720 585 0 900h1440Z" fill="url(#heaven-stair)"/>
        <g className="heaven-stairs" fill="none" stroke="#fffdf3" strokeWidth="3" opacity=".46">
          <path d="M0 696Q720 647 1440 696"/><path d="M0 738Q720 694 1440 738"/><path d="M0 784Q720 748 1440 784"/><path d="M0 836Q720 807 1440 836"/><path d="M0 887Q720 866 1440 887"/>
          <path d="M720 585 180 900M720 585 420 900M720 585 1020 900M720 585 1260 900" opacity=".23"/>
        </g>
        <g fill="url(#heaven-cloud)" filter="url(#cloud-soft)" opacity=".8">
          <ellipse cx="125" cy="690" rx="260" ry="68"/><ellipse cx="345" cy="744" rx="300" ry="76"/><ellipse cx="1300" cy="691" rx="280" ry="72"/><ellipse cx="1085" cy="748" rx="320" ry="82"/><ellipse cx="730" cy="816" rx="500" ry="66"/>
        </g>
        <g fill="#fff9ff" opacity=".4">
          <path d="M-30 720Q20 680 72 704Q104 649 154 691Q198 640 247 690Q307 653 351 704Q410 672 460 715V900H-30Z"/>
          <path d="M980 716Q1030 674 1080 705Q1121 649 1173 692Q1215 643 1263 691Q1324 654 1370 703Q1420 674 1470 716V900H980Z"/>
          <path d="M240 850Q292 812 344 840Q390 793 443 836Q493 797 545 843Q603 810 658 849Q720 813 780 850Q834 812 891 842Q944 801 996 846Q1051 813 1101 850V900H240Z" opacity=".64"/>
        </g>
        <g fill="#fff8f0" opacity=".64">
          <circle cx="160" cy="574" r="3"/><circle cx="246" cy="388" r="2.5"/><circle cx="390" cy="524" r="2"/><circle cx="1050" cy="484" r="3"/><circle cx="1217" cy="369" r="2"/><circle cx="1320" cy="566" r="3"/><circle cx="570" cy="337" r="2"/><circle cx="893" cy="300" r="2.5"/><circle cx="980" cy="610" r="2"/>
        </g>
      </svg>
      <span className="heaven-mist mist-left"/><span className="heaven-mist mist-right"/>
    </div>
  );
}

export function RoyalPalaceBackdrop() {
  return (
    <div className="royal-backdrop" aria-hidden="true">
      <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="royal-dusk" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#4a335a"/><stop offset=".36" stopColor="#a56d82"/><stop offset=".68" stopColor="#f1b58f"/><stop offset="1" stopColor="#f5dfbb"/></linearGradient>
          <linearGradient id="royal-stone" x1="0" x2="1"><stop stopColor="#7e5261"/><stop offset=".2" stopColor="#c28d78"/><stop offset=".5" stopColor="#e5bf91"/><stop offset=".8" stopColor="#b67d72"/><stop offset="1" stopColor="#70495d"/></linearGradient>
          <linearGradient id="royal-path" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#ffe9bd" stopOpacity=".15"/><stop offset="1" stopColor="#ffe9bd" stopOpacity=".78"/></linearGradient>
          <radialGradient id="royal-sun"><stop stopColor="#fff3c6"/><stop offset=".55" stopColor="#ffd989"/><stop offset="1" stopColor="#f5b962" stopOpacity="0"/></radialGradient>
          <filter id="royal-cloud-blur"><feGaussianBlur stdDeviation="16"/></filter>
          <filter id="royal-light-blur"><feGaussianBlur stdDeviation="26"/></filter>
          <g id="royal-chhatri" stroke="#805662" strokeWidth="4" fill="url(#royal-stone)">
            <path d="M-82 0V-84Q-82-133 0-174Q82-133 82-84V0Z"/>
            <path d="M-98-2H98M-75-82Q0-150 75-82" fill="none" stroke="#eac28d" strokeWidth="5"/>
            <path d="M-55 0V-69Q-55-105 0-134Q55-105 55-69V0Z" fill="none" stroke="#f5d29a" strokeWidth="3"/>
            <path d="M0-174V-202M-11-194 0-208 11-194" fill="none" stroke="#805662" strokeWidth="4"/>
            <path d="M-102 4H102V15H-102Z"/>
          </g>
          <g id="royal-jali" fill="none" stroke="#f1d6a8" strokeWidth="3">
            <path d="M-50 0V-58Q-50-95 0-116Q50-95 50-58V0M-37 0V-56Q-37-83 0-101Q37-83 37-56V0"/>
            <path d="M-48-25H48M-40-51H40M-27-74H27M0-93V0M-38-46 38-72M38-46-38-72"/>
          </g>
        </defs>
        <rect width="1440" height="900" fill="url(#royal-dusk)"/>
        <circle cx="720" cy="438" r="210" fill="url(#royal-sun)"/>
        <circle cx="720" cy="438" r="82" fill="#ffdd96" opacity=".62" filter="url(#royal-light-blur)"/>
        <path d="M0 576 165 485 306 563 453 455 624 570 765 477 920 572 1091 466 1244 560 1370 500 1440 535V790H0Z" fill="#694c6c" opacity=".52"/>
        <path d="M0 648 177 568 338 636 490 541 658 645 812 554 974 640 1122 554 1283 632 1440 564V820H0Z" fill="#725268" opacity=".55"/>
        <g fill="url(#royal-stone)" stroke="#70485a" strokeWidth="4" opacity=".87">
          <path d="M80 734V433H183V378H236V433H286V734ZM1154 734V433H1204V378H1257V433H1360V734Z"/>
          <path d="M207 725V404H310V346H353V404H408V725ZM1032 725V404H1087V346H1130V404H1233V725Z"/>
          <path d="M325 726V421H468V355H517V421H569V726ZM871 726V421H923V355H972V421H1115V726Z"/>
          <path d="M435 720V354Q435 274 720 223Q1005 274 1005 354V720Z"/>
        </g>
        <g fill="#9a6572" stroke="#684756" strokeWidth="4">
          <path d="M64 434Q131 322 198 434Z"/><path d="M1242 434Q1309 322 1376 434Z"/>
          <path d="M197 405Q281 273 365 405Z"/><path d="M1075 405Q1159 273 1243 405Z"/>
          <path d="M315 423Q419 256 523 423Z"/><path d="M917 423Q1021 256 1125 423Z"/>
          <path d="M456 354Q720 128 984 354Z" fill="#bb866f" stroke="#684756" strokeWidth="5"/>
        </g>
        <g fill="none" stroke="#f1d09b" strokeWidth="4" opacity=".88">
          <path d="M90 469H278M1162 469H1350M217 440H398M1042 440H1223M334 458H559M881 458H1106"/>
          <path d="M720 230V177M706 188 720 169 734 188M492 305Q720 170 948 305"/>
          <path d="M441 720V359Q441 282 720 232Q999 282 999 359V720" strokeWidth="7"/>
        </g>
        <g opacity=".9"><use href="#royal-chhatri" transform="translate(131 378) scale(.65)"/><use href="#royal-chhatri" transform="translate(1309 378) scale(.65)"/><use href="#royal-chhatri" transform="translate(281 346) scale(.57)"/><use href="#royal-chhatri" transform="translate(1159 346) scale(.57)"/><use href="#royal-chhatri" transform="translate(419 355) scale(.53)"/><use href="#royal-chhatri" transform="translate(1021 355) scale(.53)"/></g>
        <g opacity=".84"><use href="#royal-jali" transform="translate(159 640) scale(.86)"/><use href="#royal-jali" transform="translate(1281 640) scale(.86)"/><use href="#royal-jali" transform="translate(283 632) scale(.7)"/><use href="#royal-jali" transform="translate(1157 632) scale(.7)"/></g>
        <g fill="none" stroke="#6d4454" strokeWidth="5" opacity=".64"><path d="M20 754H1420M55 695H1385M120 635H1320"/><path d="M79 671V745M119 671V745M1318 671V745M1358 671V745M245 653V719M1195 653V719"/></g>
        <g fill="none" stroke="#a96368" strokeWidth="4"><path d="M480 276Q720 425 960 276"/><path d="M498 286Q720 418 942 286" stroke="#f5c873" strokeWidth="2"/></g>
        <g fill="#f8c451" stroke="#b97b4e" strokeWidth="2">
          <circle cx="480" cy="276" r="10"/><circle cx="528" cy="308" r="10"/><circle cx="576" cy="336" r="10"/><circle cx="624" cy="359" r="10"/><circle cx="672" cy="374" r="10"/><circle cx="720" cy="380" r="10"/><circle cx="768" cy="374" r="10"/><circle cx="816" cy="359" r="10"/><circle cx="864" cy="336" r="10"/><circle cx="912" cy="308" r="10"/><circle cx="960" cy="276" r="10"/>
        </g>
        <g fill="#fff0b2" opacity=".62"><circle cx="528" cy="307" r="3"/><circle cx="624" cy="358" r="3"/><circle cx="720" cy="379" r="3"/><circle cx="816" cy="358" r="3"/><circle cx="912" cy="307" r="3"/></g>
        <path d="M720 615 145 900h1150Z" fill="url(#royal-path)"/>
        <g fill="none" stroke="#f7ddb1" strokeWidth="4" opacity=".54"><path d="M0 754Q720 694 1440 754M0 804Q720 762 1440 804M0 853Q720 824 1440 853M720 615 220 900M720 615 500 900M720 615 940 900M720 615 1220 900"/></g>
        <g fill="#fff2d2" opacity=".58" filter="url(#royal-cloud-blur)"><ellipse cx="75" cy="778" rx="260" ry="72"/><ellipse cx="1365" cy="778" rx="260" ry="72"/><ellipse cx="720" cy="864" rx="520" ry="65"/></g>
        <g fill="#ffe6ad" opacity=".8"><circle cx="126" cy="256" r="3"/><circle cx="330" cy="238" r="2"/><circle cx="1089" cy="245" r="3"/><circle cx="1299" cy="302" r="2"/><circle cx="393" cy="438" r="2"/><circle cx="1044" cy="452" r="2"/></g>
      </svg>
    </div>
  );
}

export function SkyBackdrop() {
  return (
    <div className="sky-backdrop" aria-hidden="true">
      <svg className="sky-lights" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path d="M0 4Q360 58 720 8T1440 18" />
        {Array.from({ length: 25 }, (_, i) => {
          const x = i * 60;
          const y = 10 + 16 * Math.sin(i * 0.55);
          return <g key={i} transform={`translate(${x} ${y})`}>
            <path d="M0 -16V0" className="light-string" />
            <circle r="7" className="light-glow" />
            <circle r="4" className="light-bulb" />
          </g>;
        })}
      </svg>
      <svg className="sky-mountains" viewBox="0 0 1440 330" preserveAspectRatio="none">
        <circle cx="720" cy="178" r="64" className="sky-sun" />
        <path d="M0 230 145 107 255 184 410 76 558 166 680 110 814 204 972 88 1125 183 1274 108 1440 203V330H0Z" className="mountain-back" />
        <path d="M0 264 180 171 312 226 486 145 652 250 824 164 994 259 1161 176 1324 239 1440 196V330H0Z" className="mountain-front" />
        <path d="M0 292 170 230 328 278 510 207 700 289 870 219 1030 283 1203 220 1360 273 1440 247V330H0Z" className="mountain-near" />
      </svg>
      <div className="sky-horizon" />
    </div>
  );
}

export function Fireworks({ burstId }) {
  const canvasRef = useRef(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return undefined;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const colors = ["#fff2bb", "#ffd166", "#f58ab4", "#d9a8e5", "#fff8eb", "#87aa76", "#e89955"];
    const positions = [0.2, 0.39, 0.61, 0.8, 0.5];
    const shells = positions.map((position, i) => ({
      x: width * position,
      targetY: height * (0.2 + (i % 3) * 0.075),
      delay: i * (reducedMotion ? 90 : 250),
      color: colors[i % colors.length],
      exploded: false,
    }));
    const particles = [];
    const started = performance.now();
    let frame;

    const animate = (now) => {
      const elapsed = now - started;
      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = "lighter";
      shells.forEach((shell) => {
        const flight = elapsed - shell.delay;
        if (flight < 0) return;
        const flightDuration = reducedMotion ? 250 : 620;
        if (flight < flightDuration) {
          const progress = flight / flightDuration;
          const ease = 1 - (1 - progress) ** 2;
          const y = height * 0.94 - (height * 0.94 - shell.targetY) * ease;
          context.globalAlpha = 0.85;
          context.strokeStyle = shell.color;
          context.lineWidth = 2;
          context.beginPath();
          context.moveTo(shell.x, y + 15);
          context.lineTo(shell.x, y);
          context.stroke();
          context.beginPath();
          context.arc(shell.x, y, 2, 0, Math.PI * 2);
          context.fillStyle = "#fff9e7";
          context.fill();
        } else if (!shell.exploded) {
          shell.exploded = true;
          const count = reducedMotion ? 18 : 52;
          for (let i = 0; i < count; i++) {
            const angle = (Math.PI * 2 * i) / count + Math.random() * 0.16;
            const speed = (reducedMotion ? 1.2 : 1.8) + Math.random() * (reducedMotion ? 1.2 : 3.2);
            particles.push({ x: shell.x, y: shell.targetY, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, alpha: 1, decay: 0.009 + Math.random() * 0.012, size: 1 + Math.random() * 1.7, color: shell.color });
          }
        }
      });

      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx *= 0.985;
        particle.vy = particle.vy * 0.985 + 0.035;
        particle.alpha -= particle.decay;
        if (particle.alpha <= 0) { particles.splice(i, 1); continue; }
        context.globalAlpha = particle.alpha;
        context.fillStyle = particle.color;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();
      }
      context.globalAlpha = 1;
      if (elapsed < 4700 || particles.length) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    const hideTimer = window.setTimeout(() => setVisible(false), 5600);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(hideTimer);
      window.removeEventListener("resize", resize);
    };
  }, [burstId]);

  if (!visible) return null;
  return <canvas ref={canvasRef} className="fireworks-canvas" aria-hidden="true" />;
}
