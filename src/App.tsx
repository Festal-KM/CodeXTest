import { useEffect, useState } from "react";

const projects = [
  {
    name: "複雑な業務に、シンプルな答えを。",
    type: "DX STRATEGY / 業務プロセス設計",
    category: "事業・DX戦略",
    color: "lavender",
    title: "FLOW",
    text: "散らばった情報を、ひとつの流れへ。業務の可視化から、チームで使い続けられる仕組みの設計まで。",
    tags: ["業務可視化", "システム構想", "ロードマップ"],
  },
  {
    name: "データを、次の一手に変える。",
    type: "DATA & ANALYTICS / 意思決定支援",
    category: "データ活用",
    color: "green",
    title: "SIGNAL",
    text: "数字を集めるだけで終わらない。事業の問いから逆算し、判断と行動につながるデータ活用を設計。",
    tags: ["KPI設計", "BIダッシュボード", "分析基盤"],
  },
  {
    name: "アイデアが、事業になるまで。",
    type: "PRODUCT DEVELOPMENT / プロダクト伴走",
    category: "開発・技術支援",
    color: "peach",
    title: "LAUNCH",
    text: "まだ曖昧なアイデアを、小さく試せるプロダクトへ。仮説検証から技術選定、開発チームとの橋渡しまで。",
    tags: ["MVP設計", "技術選定", "開発推進"],
  },
];
const filters = ["すべて", "事業・DX戦略", "データ活用", "開発・技術支援"];

function App() {
  const [filter, setFilter] = useState("すべて");
  const [selected, setSelected] = useState<number | null>(null);
  const [menu, setMenu] = useState(false);
  const [contact, setContact] = useState(false);
  useEffect(() => {
    if (selected === null && !contact) return;
    const previous = document.activeElement as HTMLElement | null;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelected(null);
        setContact(false);
      }
      if (event.key === "Tab") {
        const items = Array.from(
          document.querySelectorAll<HTMLElement>(
            ".modal button, .modal a, .modal input, .modal textarea",
          ),
        );
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", close);
      previous?.focus();
    };
  }, [selected, contact]);
  return (
    <div className="portfolio">
      <header className="header">
        <a className="logo" href="#home" aria-label="ホーム">
          k<span className="logo-dot">.</span>
          <span className="logo-name">KAI / INDEPENDENT CONSULTANT</span>
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenu(!menu)}
          aria-expanded={menu}
        >
          MENU {menu ? "−" : "+"}
        </button>
        <nav className={menu ? "nav open" : "nav"}>
          {[
            ["WORKS", "#works"],
            ["ABOUT", "#about"],
            ["SERVICES", "#services"],
          ].map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenu(false)}>
              {label}
            </a>
          ))}
          <a
            className="nav-contact"
            href="#contact"
            onClick={() => setMenu(false)}
          >
            LET’S TALK <span>↗</span>
          </a>
        </nav>
      </header>
      <main>
        <section className="hero" id="home">
          <div className="hero-top">
            <span className="eyebrow">
              <i /> INDEPENDENT IT CONSULTANT
            </span>
            <span className="location">
              BASED IN JAPAN · WORKING EVERYWHERE
            </span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <h1>
                ビジネスと、
                <br />
                テクノロジーの
                <br />
                <span className="serif">あいだ</span>をつなぐ
                <span className="period">。</span>
              </h1>
              <p>
                課題の、その先へ。
                <br />
                戦略を描き、仕組みをつくり、変化をともに。
                <br />
                事業に寄り添う、フリーランスITコンサルタント。
              </p>
              <a className="button dark" href="#works">
                仕事とアプローチを見る <span>↗</span>
              </a>
              <div className="availability">
                <span /> ご相談・プロジェクトのご依頼を受付中
              </div>
            </div>
            <div
              className="hero-art"
              aria-label="ビジネスとテクノロジーが交差する抽象的なオブジェクト"
            >
              <div className="art-grid" />
              <span className="art-label">CONNECTING THE DOTS.</span>
              <div className="orb orb-one" />
              <div className="orb orb-two" />
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="art-star">✳︎</div>
              <div className="art-note">
                <span>STRATEGY</span>
                <span className="note-line" />
                <span>TECHNOLOGY</span>
              </div>
              <span className="art-coordinate">35°40′ N / 139°45′ E</span>
              <span className="art-number">FIG. 01 — POSSIBILITIES</span>
            </div>
          </div>
          <div className="hero-bottom">
            <span>THINK CLEAR. BUILD BETTER.</span>
            <a href="#works">
              SCROLL TO EXPLORE <span>↓</span>
            </a>
          </div>
        </section>
        <div className="ticker" aria-hidden="true">
          <span>STRATEGY</span>
          <b>✳︎</b>
          <span>TECHNOLOGY</span>
          <b>✳︎</b>
          <span>HUMAN CONNECTION</span>
          <b>✳︎</b>
          <span>MAKE IT HAPPEN</span>
          <b>✳︎</b>
        </div>
        <section className="works section" id="works">
          <div className="section-top">
            <div>
              <div className="eyebrow">01 / SELECTED APPROACHES</div>
              <h2>
                問いから、<span className="serif">かたち</span>へ。
              </h2>
            </div>
            <p>
              ビジネスの解像度を上げる。
              <br />
              そのための、3つのアプローチ。
            </p>
          </div>
          <div className="works-toolbar">
            <div className="filters">
              {filters.map((f) => (
                <button
                  key={f}
                  className={filter === f ? "active" : ""}
                  onClick={() => setFilter(f)}
                >
                  {f}
                  {f === "すべて" && <sup>03</sup>}
                </button>
              ))}
            </div>
            <span className="sample-label">
              CONCEPT PROJECTS / サンプル事例
            </span>
          </div>
          <div className="project-grid">
            {projects.map(
              (p, i) =>
                (filter === "すべて" || filter === p.category) && (
                  <button
                    className="project"
                    key={p.title}
                    onClick={() => setSelected(i)}
                  >
                    <div className={"project-visual " + p.color}>
                      <div className="project-meta">
                        <span>CONCEPT / 0{i + 1}</span>
                        <span>↗</span>
                      </div>
                      {i === 0 ? (
                        <div className="flow-art">
                          <div className="flow-node">
                            DISCOVER <span>01</span>
                          </div>
                          <div className="flow-connector">↓</div>
                          <div className="flow-node special">
                            CONNECT <span>✳︎</span>
                          </div>
                          <div className="flow-connector">↓</div>
                          <div className="flow-node">
                            TRANSFORM <span>03</span>
                          </div>
                        </div>
                      ) : i === 1 ? (
                        <div className="signal-art">
                          <span className="signal-title">
                            Clarity in every signal.
                          </span>
                          <div className="bars">
                            {[24, 46, 38, 64, 58, 79, 91].map((n, j) => (
                              <i key={j} style={{ height: n + "%" }} />
                            ))}
                          </div>
                          <span className="signal-caption">
                            FROM INFORMATION TO INSIGHT ↗
                          </span>
                        </div>
                      ) : (
                        <div className="launch-art">
                          <div className="launch-orbit" />
                          <span>↗</span>
                          <small>
                            FROM ZERO
                            <br />
                            TO POSSIBILITY.
                          </small>
                        </div>
                      )}
                      <div className="project-word">
                        {p.title}
                        <span>®</span>
                      </div>
                    </div>
                    <div className="project-description">
                      <span>{p.type}</span>
                      <h3>{p.name}</h3>
                      <div className="project-tags">
                        {p.tags.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </button>
                ),
            )}
          </div>
        </section>
        <section className="about section" id="about">
          <div className="about-art">
            <span className="eyebrow">A LITTLE ABOUT ME</span>
            <div className="asterisk">✳︎</div>
            <div className="about-art-bottom">
              <span>
                技術の話も、
                <br />
                事業の話も。
              </span>
              <span>
                その間に、
                <br />
                僕がいます。
              </span>
            </div>
          </div>
          <div className="about-copy">
            <div className="eyebrow">02 / THE PERSON BEHIND THE WORK</div>
            <h2>
              いい変化は、
              <br />
              <span className="serif">いい対話</span>から。
            </h2>
            <p>
              はじめまして、KAIです。
              <br />
              ビジネスとテクノロジーの間に立ち、
              <br />
              「やりたい」を「できる」に変える仕事をしています。
            </p>
            <p>
              大切にしているのは、まず、よく聴くこと。
              <br />
              流行りの技術を当てはめるのではなく、
              <br />
              あなたの事業にとっての、本質的な一手を考えます。
            </p>
            <div className="about-signature">
              Kai<span>Independent IT Consultant</span>
            </div>
            <span className="profile-note">
              ※ 氏名・プロフィールは公開前にご本人の情報へ差し替えてください。
            </span>
          </div>
        </section>
        <section className="services section" id="services">
          <div className="section-top">
            <div>
              <div className="eyebrow">03 / HOW I CAN HELP</div>
              <h2>
                必要なところに、<span className="serif">必要な力</span>を。
              </h2>
            </div>
            <p>
              構想の壁打ちから、実行の伴走まで。
              <br />
              チームの一員として、柔軟に関わります。
            </p>
          </div>
          {[
            [
              "01",
              "Strategy & DX",
              "事業・DX戦略",
              "課題の整理から、進むべき道筋を。業務と技術の両面から、実現可能な変革を設計します。",
            ],
            [
              "02",
              "Technology",
              "技術選定・開発支援",
              "つくる前の判断から、つくった後の改善まで。事業にフィットする技術と開発体制を。",
            ],
            [
              "03",
              "Partnership",
              "プロジェクト伴走",
              "社外のパートナーであり、チームの一員。現場と経営をつなぎ、プロジェクトを前へ。",
            ],
          ].map(([n, title, sub, text]) => (
            <a className="service-row" key={n} href="#contact">
              <span className="service-number">{n}</span>
              <div>
                <h3>{title}</h3>
                <span>{sub}</span>
              </div>
              <p>{text}</p>
              <span className="service-arrow">↗</span>
            </a>
          ))}
        </section>
        <section className="contact section" id="contact">
          <div className="eyebrow">
            <i /> 04 / OPEN FOR COLLABORATION
          </div>
          <div className="contact-main">
            <h2>
              次の<span className="serif">可能性</span>を、
              <br />
              一緒に。<span className="contact-star">✳︎</span>
            </h2>
            <button className="contact-circle" onClick={() => setContact(true)}>
              <span>LET’S TALK</span>
              <b>↗</b>
              <span>プロジェクトのご相談</span>
            </button>
          </div>
          <p>
            まだ、まとまっていなくても大丈夫。
            <br />
            まずは、あなたのお話を聞かせてください。
          </p>
          <div className="contact-line">
            <span>GOOD CONVERSATIONS. GREAT POSSIBILITIES.</span>
            <span>JAPAN ↔ EVERYWHERE</span>
          </div>
        </section>
      </main>
      <footer>
        <a className="logo" href="#home">
          k<span className="logo-dot">.</span>
        </a>
        <span>
          © {new Date().getFullYear()} KAI — INDEPENDENT IT CONSULTANT
        </span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
      {(selected !== null || contact) && (
        <div
          className="modal-backdrop"
          onClick={() => {
            setSelected(null);
            setContact(false);
          }}
        >
          <section
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-label={contact ? "プロジェクトのご相談" : "アプローチの詳細"}
          >
            <button
              className="modal-close"
              autoFocus
              onClick={() => {
                setSelected(null);
                setContact(false);
              }}
            >
              閉じる ×
            </button>
            <div onClick={(e) => e.stopPropagation()}>
              {contact ? (
                <ContactForm />
              ) : (
                selected !== null && (
                  <>
                    <div className="eyebrow">
                      CONCEPT PROJECT / 0{selected + 1}
                    </div>
                    <h2>{projects[selected].title} ↗</h2>
                    <h3>{projects[selected].name}</h3>
                    <p>{projects[selected].text}</p>
                    <div className="project-tags">
                      {projects[selected].tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    <p className="profile-note">
                      サービスの進め方を紹介するサンプル事例です。実際の顧客実績ではありません。
                    </p>
                    <a
                      className="button dark"
                      href="#contact"
                      onClick={() => setSelected(null)}
                    >
                      このテーマで相談する ↗
                    </a>
                  </>
                )
              )}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
function ContactForm() {
  const [copied, setCopied] = useState(false);
  return (
    <>
      <div className="eyebrow">LET’S START A CONVERSATION</div>
      <h2>はじめの一歩を。</h2>
      <p>
        ご相談内容をメモとしてコピーできます。
        <br />
        連絡先は公開前に設定してください。
      </p>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const data = new FormData(e.currentTarget);
          const text = `お名前: ${data.get("name")}\nメール: ${data.get("email")}\nご相談内容: ${data.get("message")}`;
          try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
          } catch {
            setCopied(false);
            alert(
              "コピーできませんでした。入力内容を選択してコピーしてください。",
            );
          }
        }}
      >
        <label>
          お名前
          <input name="name" placeholder="山田 太郎" required />
        </label>
        <label>
          メールアドレス
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />
        </label>
        <label>
          ご相談内容
          <textarea
            name="message"
            placeholder="取り組みたいことや、お困りのことを教えてください。"
            required
            rows={4}
          />
        </label>
        <button className="button dark" type="submit">
          相談内容をコピー <span>↗</span>
        </button>
        <p className="form-status" role="status">
          {copied
            ? "コピーしました。このフォームからメールは送信されません。"
            : "このフォームは下書き用です。外部への送信・保存は行いません。"}
        </p>
      </form>
    </>
  );
}
export default App;
