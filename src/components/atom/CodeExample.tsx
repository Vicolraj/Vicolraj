import './styles/code.css';

export default function CodeExample() {
  return (
    <section id="code">
      <div className="reveal">
        <div className="section-eyebrow">Implementation</div>
        <h2 className="section-title">Production-Ready Code</h2>
        <p className="section-desc">Every .riv file ships with a typed React hook and state machine wiring. Drop in and go.</p>
      </div>

      <div className="code-split">
        <div className="code-block reveal reveal-delay-1">
          <div className="code-header">
            <div className="code-dots"><span></span><span></span><span></span></div>
            <span className="code-filename">useRiveCharacter.tsx</span>
          </div>
          <pre><code><span className="cm">{`// Drop-in Rive hook for any character`}</span>{`
`}<span className="kw">import</span> {` { `}<span className="type">useRive</span>{`, `}<span className="type">useStateMachineInput</span>{` } `}<span className="kw">from</span> <span className="str">'@rive-app/react-canvas'</span>{`;

`}<span className="kw">interface</span> <span className="type">RiveCharacterProps</span> {` {
  `}<span className="prop">rivFile</span>{`: `}<span className="type">string</span>{`;
  `}<span className="prop">stateMachine</span>{`: `}<span className="type">string</span>{`;
  `}<span className="prop">artboard</span>{`?: `}<span className="type">string</span>{`;
}

`}<span className="kw">export function</span> <span className="fn">useRiveCharacter</span>{`({
  `}<span className="prop">rivFile</span>{`, `}<span className="prop">stateMachine</span>{`, `}<span className="prop">artboard</span>{`
}: `}<span className="type">RiveCharacterProps</span>{`) {

  `}<span className="kw">const</span> {` { `}<span className="prop">rive</span>{`, `}<span className="prop">RiveComponent</span>{` } = `}<span className="fn">useRive</span>{`({
    `}<span className="prop">src</span>{`: rivFile,
    `}<span className="prop">stateMachines</span>{`: stateMachine,
    `}<span className="prop">artboard</span>{`: artboard,
    `}<span className="prop">autoplay</span>{`: `}<span className="kw">true</span>{`,
  });

  `}<span className="kw">const</span> {` celebrate = `}<span className="fn">useStateMachineInput</span>{`(
    rive, stateMachine, `}<span className="str">'celebrate'</span>{`
  );
  `}<span className="kw">const</span> {` isFlying = `}<span className="fn">useStateMachineInput</span>{`(
    rive, stateMachine, `}<span className="str">'isFlying'</span>{`
  );
  `}<span className="kw">const</span> {` emotion = `}<span className="fn">useStateMachineInput</span>{`(
    rive, stateMachine, `}<span className="str">'emotion'</span>{`
  );

  `}<span className="kw">return</span> {` {
    `}<span className="prop">RiveComponent</span>{`,
    `}<span className="fn">triggerCelebrate</span>{`: () => celebrate?.`}<span className="fn">fire</span>{`(),
    `}<span className="fn">setFlying</span>{`: (v: `}<span className="type">boolean</span>{`) => {
      `}<span className="kw">if</span>{` (isFlying) isFlying.`}<span className="prop">value</span>{` = v;
    },
    `}<span className="fn">setEmotion</span>{`: (n: `}<span className="type">number</span>{`) => {
      `}<span className="kw">if</span>{` (emotion) emotion.`}<span className="prop">value</span>{` = n;
    },
  };
}`}</code></pre>
        </div>

        <div className="code-features reveal reveal-delay-2">
          <div className="feature-item">
            <div className="feature-icon" style={{ background: 'rgba(139,92,246,0.1)' }}>
              <img src="/icons/statemachine.svg" alt="State Machine" width="32" height="32" />
            </div>
            <div className="feature-text">
              <h4>State Machine Driven</h4>
              <p>Fire any animation via a single input trigger. The frontend never manages animation logic directly — Rive handles all transitions.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon" style={{ background: 'rgba(0,212,170,0.1)' }}>
              <img src="/icons/bones.svg" alt="Skeletal Rigging" width="32" height="32" />
            </div>
            <div className="feature-text">
              <h4>Skeletal Rigging</h4>
              <p>Every character built with bones + constraints for smooth, responsive movement. Body parts individually animatable at runtime.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon" style={{ background: 'rgba(240,180,41,0.1)' }}>
              <img src="/icons/eventbus.svg" alt="Event Bus" width="32" height="32" />
            </div>
            <div className="feature-text">
              <h4>Event Bus Integration</h4>
              <p>App-level reward events (correct answer, island complete, daily claim) map directly to Rive state machine inputs.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon" style={{ background: 'rgba(59,130,246,0.1)' }}>
              <img src="/icons/pwa.svg" alt="PWA" width="32" height="32" />
            </div>
            <div className="feature-text">
              <h4>PWA + Cross-Device</h4>
              <p>WASM caching, lazy loading, and static fallbacks ensure smooth performance on Android, iOS, tablet, and desktop.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon" style={{ background: 'rgba(236,72,153,0.1)' }}>
              <img src="/icons/lock.svg" alt="Typed" width="32" height="32" />
            </div>
            <div className="feature-text">
              <h4>Typed Throughout</h4>
              <p>Full TypeScript types for artboard names, state machine inputs, and trigger events. Zero magic strings in production code.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
