/* ═══════════════════════════════════════════════════════════════════
   srefix-diagnosis — i18n.js
   Translations for: zh (default) · en · ja · ko · es
   Each key uses dot notation: section.subkey
   ═══════════════════════════════════════════════════════════════════ */

(function (root) {
  'use strict';

  /* ─────────────────────────────────────────────────────────────────
     SUPPORTED LANGUAGES
     ─────────────────────────────────────────────────────────────── */
  const LANGUAGES = [
    { code: 'zh', label: '简体中文',  short: '中文',  htmlLang: 'zh-CN' },
    { code: 'en', label: 'English',  short: 'EN',   htmlLang: 'en'    },
    { code: 'ja', label: '日本語',    short: '日本語', htmlLang: 'ja'   },
    { code: 'ko', label: '한국어',     short: '한국어', htmlLang: 'ko'   },
    { code: 'es', label: 'Español',  short: 'ES',   htmlLang: 'es'    },
  ];

  const DEFAULT_LANG = 'zh';
  const STORAGE_KEY = 'srefix_lang';

  /* ─────────────────────────────────────────────────────────────────
     TRANSLATIONS
     ─────────────────────────────────────────────────────────────── */
  const TRANSLATIONS = {

    /* ── 简体中文 ─────────────────────────────────────────────── */
    zh: {
      'meta.title':                  'srefix-diagnosis — 基于 Claude 的 SRE 诊断套件',
      'meta.description':            'srefix-diagnosis: 250+ 专精技术栈的 SRE 智能体,通过 MCP 接入 Claude,本地运行,开源免费。',

      'nav.what':                    '简介',
      'nav.agents':                  '智能体',
      'nav.architecture':            '架构',
      'nav.quickstart':              '快速开始',
      'nav.github':                  'GitHub',
      'nav.langLabel':               '语言',

      'hero.subtitle':               '基于 Claude 的 SRE 诊断套件。250+ 专精技术栈的智能体,本地运行,开源免费。',
      'hero.cta.start':              '快速开始 ›',
      'hero.cta.github':             '查看 GitHub ›',
      'hero.terminal.title':         'claude code',
      'hero.terminal.line1':         '> 用户报告 auth-service 接口 5xx 飙升',
      'hero.terminal.line2':         '调用 srefix-diag-postgres 检查数据库连接池',
      'hero.terminal.line3':         '调用 srefix-diag-istio 检查上游限流',
      'hero.terminal.line4':         '已定位:连接池耗尽,deploy#3892 的配置改动是根因',
      'hero.terminal.line5':         '建议:回滚 deploy#3892 → MTTR 56s',

      'what.eyebrow':                '是什么',
      'what.title':                  '让 Claude 真正懂你的技术栈。',
      'what.sub':                    'srefix-diagnosis 把 250+ 种主流基础设施(Postgres / Kafka / Istio / Kubernetes / Prometheus ...)封装成专精智能体,通过 MCP 接入 Claude Code 或 Claude Desktop。每个智能体都内置该技术栈的故障模式、关键指标和排障套路。',
      'what.cta':                    '了解架构 ›',

      'agents.eyebrow':              '智能体库',
      'agents.title':                '250+ 专精智能体。覆盖你日常用的一切。',
      'agents.sub':                  '不再需要在通用 LLM 上拼凑提示词。每一种技术栈有自己专精的智能体。',
      'agents.cta':                  '查看完整列表 ›',
      'agents.cat.databases':        '数据库',
      'agents.cat.databases.desc':   'Postgres · MySQL · MongoDB · Redis · Cassandra · ClickHouse · …',
      'agents.cat.k8s':              '编排与服务网格',
      'agents.cat.k8s.desc':         'Kubernetes · Istio · Envoy · ArgoCD · Helm · …',
      'agents.cat.cloud':            '云平台',
      'agents.cat.cloud.desc':       'AWS · GCP · Azure · 阿里云 · 腾讯云 · 华为云 · …',
      'agents.cat.observability':    '可观测性',
      'agents.cat.observability.desc':'Prometheus · Grafana · Loki · Datadog · OpenTelemetry · …',
      'agents.cat.messaging':        '消息与流',
      'agents.cat.messaging.desc':   'Kafka · RabbitMQ · NATS · Pulsar · Kinesis · …',
      'agents.cat.cicd':             'CI/CD 与平台',
      'agents.cat.cicd.desc':        'GitHub Actions · GitLab CI · Spinnaker · Tekton · ArgoCD · …',

      'arch.eyebrow':                '架构',
      'arch.title':                  'Claude 在最上面,四层工具按需调用。',
      'arch.sub':                    '不是流水线 —— Claude 根据问题动态决定调哪层、调几次。一切跑在你本地,数据不出门。',

      'arch.claude.label':           '编排者',
      'arch.claude.title':           'Claude',
      'arch.claude.desc':            '读你的问题,挑工具,权衡证据,给出最终结论:根因、影响面、具体的修复或回滚建议。',

      'arch.box.knowledge.label':    '知识层',
      'arch.box.knowledge.title':    '250 个 diag-{tech} 智能体',
      'arch.box.knowledge.desc':     '每个技术一个 MCP —— postgres / kafka / istio / k8s / …。各自内置该技术的故障模式、关键指标、排障套路。',
      'arch.box.reasoning.label':    '推理层',
      'arch.box.reasoning.title':    'srefix-explorer',
      'arch.box.reasoning.desc':     'manual 没命中时的兜底,加上跨技术依赖扇出,把藏在上游的根因挖出来。',
      'arch.box.discovery.label':    '发现层',
      'arch.box.discovery.title':    'srefix-discovery',
      'arch.box.discovery.desc':     '5 层共 33 个适配器 —— 云、K8s、注册中心、集群直连、VM 标签。找到你的服务和主机。',
      'arch.box.telemetry.label':    '遥测与执行',
      'arch.box.telemetry.title':    'prom · loki · es · jumphost',
      'arch.box.telemetry.desc':     '智能体拉真实证据的地方:PromQL、LogQL、Elasticsearch,以及带安全网关的 SSH-via-bastion 命令执行。',

      'arch.preflight.label':        '预检 · 离线',
      'arch.preflight.title':        'Verify',
      'arch.preflight.desc':         '独立工具。首次接入前跑一遍 —— 把智能体里引用的所有指标名、PromQL 跟真实 exporter 白名单对一遍,找出口径不一致。',

      'quickstart.eyebrow':          '快速开始',
      'quickstart.title':            '一行命令接入 Claude。',
      'quickstart.sub':              '已经在用 Claude Code 或 Claude Desktop?把 srefix-diagnosis 加到 MCP 配置即可。',
      'quickstart.step1.title':      '安装',
      'quickstart.step1.desc':       '从 GitHub 克隆并 pip 安装需要的 MCP。',
      'quickstart.step2.title':      '配置',
      'quickstart.step2.desc':       '把生成的 MCP 配置粘进 Claude 的 settings.json。',
      'quickstart.step3.title':      '使用',
      'quickstart.step3.desc':       '在 Claude 里直接问问题,智能体自动接管。',
      'quickstart.cta':              '查看完整文档 ›',

      'final.title':                 '把诊断时间从小时变成分钟。',
      'final.sub':                   '开源 · Apache 2.0 · 本地运行 · 不锁厂商。',
      'final.cta.github':            '在 GitHub 上查看 ›',

      'footer.tagline':              'AI 驱动的 SRE 诊断套件。',
      'footer.repo':                 'GitHub 仓库',
      'footer.license':              'Apache 2.0',
      'footer.copyright':            '© 2026 srefix-diagnosis 贡献者。',
    },

    /* ── English ─────────────────────────────────────────────── */
    en: {
      'meta.title':                  'srefix-diagnosis — SRE diagnosis toolkit for Claude',
      'meta.description':            'srefix-diagnosis: 250+ tech-specific SRE agents that plug into Claude via MCP. Runs locally. Open source.',

      'nav.what':                    'What',
      'nav.agents':                  'Agents',
      'nav.architecture':            'Architecture',
      'nav.quickstart':              'Quick Start',
      'nav.github':                  'GitHub',
      'nav.langLabel':               'Language',

      'hero.subtitle':               'An SRE diagnosis toolkit for Claude. 250+ tech-specific agents. Runs locally. Open source.',
      'hero.cta.start':              'Get started ›',
      'hero.cta.github':             'View on GitHub ›',
      'hero.terminal.title':         'claude code',
      'hero.terminal.line1':         '> users report auth-service 5xx spike',
      'hero.terminal.line2':         'calling srefix-diag-postgres — checking connection pool',
      'hero.terminal.line3':         'calling srefix-diag-istio — checking upstream rate limits',
      'hero.terminal.line4':         'root cause: pool exhaustion from deploy#3892 config change',
      'hero.terminal.line5':         'recommend: roll back deploy#3892 → MTTR 56s',

      'what.eyebrow':                'What it is',
      'what.title':                  'Make Claude actually understand your stack.',
      'what.sub':                    'srefix-diagnosis wraps 250+ pieces of common infrastructure (Postgres, Kafka, Istio, Kubernetes, Prometheus, …) into specialized agents you mount into Claude Code or Claude Desktop via MCP. Each agent ships with the failure modes, key metrics, and runbooks for that one tech.',
      'what.cta':                    'See the architecture ›',

      'agents.eyebrow':              'Agent library',
      'agents.title':                '250+ specialized agents. Everything you actually use.',
      'agents.sub':                  'Stop hand-rolling prompts on a generic LLM. Every stack gets its own expert agent.',
      'agents.cta':                  'See the full list ›',
      'agents.cat.databases':        'Databases',
      'agents.cat.databases.desc':   'Postgres · MySQL · MongoDB · Redis · Cassandra · ClickHouse · …',
      'agents.cat.k8s':              'Orchestration & Mesh',
      'agents.cat.k8s.desc':         'Kubernetes · Istio · Envoy · ArgoCD · Helm · …',
      'agents.cat.cloud':            'Cloud platforms',
      'agents.cat.cloud.desc':       'AWS · GCP · Azure · Aliyun · Tencent Cloud · Huawei Cloud · …',
      'agents.cat.observability':    'Observability',
      'agents.cat.observability.desc':'Prometheus · Grafana · Loki · Datadog · OpenTelemetry · …',
      'agents.cat.messaging':        'Messaging & streaming',
      'agents.cat.messaging.desc':   'Kafka · RabbitMQ · NATS · Pulsar · Kinesis · …',
      'agents.cat.cicd':              'CI/CD & platform',
      'agents.cat.cicd.desc':        'GitHub Actions · GitLab CI · Spinnaker · Tekton · ArgoCD · …',

      'arch.eyebrow':                'Architecture',
      'arch.title':                  'Claude on top. Four layers it calls as needed.',
      'arch.sub':                    'Not a pipeline — Claude picks tools dynamically based on the question. Everything runs locally; your data stays put.',

      'arch.claude.label':           'ORCHESTRATOR',
      'arch.claude.title':           'Claude',
      'arch.claude.desc':            'Reads your question, picks tools, weighs the evidence, and produces a final verdict: root cause, blast radius, and a concrete fix or rollback.',

      'arch.box.knowledge.label':    'KNOWLEDGE',
      'arch.box.knowledge.title':    '250 diag-{tech} agents',
      'arch.box.knowledge.desc':     'One MCP per tech — postgres, kafka, istio, k8s, …. Each ships with the failure modes, key metrics, and runbooks for that one tech.',
      'arch.box.reasoning.label':    'REASONING',
      'arch.box.reasoning.title':    'srefix-explorer',
      'arch.box.reasoning.desc':     'Fallback when a manual misses, plus cross-tech dependency fan-out so root causes hiding upstream get found.',
      'arch.box.discovery.label':    'DISCOVERY',
      'arch.box.discovery.title':    'srefix-discovery',
      'arch.box.discovery.desc':     '33 adapters across 5 layers — clouds, K8s, registries, direct cluster bootstrap, VM tags. Finds your services and hosts.',
      'arch.box.telemetry.label':    'TELEMETRY & EXECUTION',
      'arch.box.telemetry.title':    'prom · loki · es · jumphost',
      'arch.box.telemetry.desc':     'Where agents pull real evidence: PromQL, LogQL, Elasticsearch, plus SSH-via-bastion command execution with safety gating.',

      'arch.preflight.label':        'PRE-FLIGHT · OFFLINE',
      'arch.preflight.title':        'Verify',
      'arch.preflight.desc':         'Independent tool. Run once before trusting the manuals — diffs every metric name and PromQL referenced by agents against real-exporter whitelists.',

      'quickstart.eyebrow':          'Quick start',
      'quickstart.title':            'One command to plug into Claude.',
      'quickstart.sub':              'Already on Claude Code or Claude Desktop? Add srefix-diagnosis to your MCP config.',
      'quickstart.step1.title':      'Install',
      'quickstart.step1.desc':       'Clone from GitHub, pip-install the MCPs you need.',
      'quickstart.step2.title':      'Configure',
      'quickstart.step2.desc':       'Paste the generated MCP block into Claude\'s settings.json.',
      'quickstart.step3.title':      'Use',
      'quickstart.step3.desc':       'Ask Claude in plain language. The right agents take over.',
      'quickstart.cta':              'Read the full docs ›',

      'final.title':                 'Diagnoses in minutes, not hours.',
      'final.sub':                   'Open source · Apache 2.0 · Runs locally · No vendor lock-in.',
      'final.cta.github':            'View on GitHub ›',

      'footer.tagline':              'An AI-powered SRE diagnosis toolkit.',
      'footer.repo':                 'GitHub repo',
      'footer.license':              'Apache 2.0',
      'footer.copyright':            '© 2026 srefix-diagnosis contributors.',
    },

    /* ── 日本語 ─────────────────────────────────────────────── */
    ja: {
      'meta.title':                  'srefix-diagnosis — Claude 用 SRE 診断ツールキット',
      'meta.description':            'srefix-diagnosis: 250+ の技術スタックに特化した SRE エージェント。MCP 経由で Claude に接続。ローカル実行・OSS。',

      'nav.what':                    '概要',
      'nav.agents':                  'エージェント',
      'nav.architecture':            'アーキテクチャ',
      'nav.quickstart':              'クイックスタート',
      'nav.github':                  'GitHub',
      'nav.langLabel':               '言語',

      'hero.subtitle':               'Claude のための SRE 診断ツールキット。250+ の技術特化エージェント。ローカル実行・OSS。',
      'hero.cta.start':              'はじめる ›',
      'hero.cta.github':             'GitHub を見る ›',
      'hero.terminal.title':         'claude code',
      'hero.terminal.line1':         '> ユーザーから auth-service の 5xx 急増の報告',
      'hero.terminal.line2':         'srefix-diag-postgres を呼び出し — コネクションプールを確認',
      'hero.terminal.line3':         'srefix-diag-istio を呼び出し — 上流のレート制限を確認',
      'hero.terminal.line4':         '原因特定: deploy#3892 の設定変更によるプール枯渇',
      'hero.terminal.line5':         '推奨: deploy#3892 をロールバック → MTTR 56 秒',

      'what.eyebrow':                'これは何か',
      'what.title':                  'Claude にあなたのスタックを本当に理解させる。',
      'what.sub':                    'srefix-diagnosis は 250+ の主要インフラ(Postgres / Kafka / Istio / Kubernetes / Prometheus …)を専門エージェントとしてラップし、MCP 経由で Claude Code または Claude Desktop に接続します。各エージェントには、その技術固有の障害モード・主要メトリクス・トラブルシュート手順が組み込まれています。',
      'what.cta':                    'アーキテクチャを見る ›',

      'agents.eyebrow':              'エージェントライブラリ',
      'agents.title':                '250+ の専門エージェント。あなたが実際に使うすべて。',
      'agents.sub':                  '汎用 LLM 向けにプロンプトを毎回書く必要はありません。スタックごとに専門エージェントが用意されています。',
      'agents.cta':                  '完全なリストを見る ›',
      'agents.cat.databases':        'データベース',
      'agents.cat.databases.desc':   'Postgres · MySQL · MongoDB · Redis · Cassandra · ClickHouse · …',
      'agents.cat.k8s':              'オーケストレーションとメッシュ',
      'agents.cat.k8s.desc':         'Kubernetes · Istio · Envoy · ArgoCD · Helm · …',
      'agents.cat.cloud':            'クラウドプラットフォーム',
      'agents.cat.cloud.desc':       'AWS · GCP · Azure · Aliyun · Tencent Cloud · Huawei Cloud · …',
      'agents.cat.observability':    '可観測性',
      'agents.cat.observability.desc':'Prometheus · Grafana · Loki · Datadog · OpenTelemetry · …',
      'agents.cat.messaging':        'メッセージング・ストリーミング',
      'agents.cat.messaging.desc':   'Kafka · RabbitMQ · NATS · Pulsar · Kinesis · …',
      'agents.cat.cicd':             'CI/CD・プラットフォーム',
      'agents.cat.cicd.desc':        'GitHub Actions · GitLab CI · Spinnaker · Tekton · ArgoCD · …',

      'arch.eyebrow':                'アーキテクチャ',
      'arch.title':                  'Claude が最上位。下の 4 層を必要に応じて呼び出します。',
      'arch.sub':                    'パイプラインではなく — Claude が問題に応じて動的にツールを選びます。すべてローカルで実行、データは外に出ません。',

      'arch.claude.label':           'オーケストレーター',
      'arch.claude.title':           'Claude',
      'arch.claude.desc':            '質問を読み、ツールを選び、証拠を評価し、最終結論を出力します:根本原因、影響範囲、具体的な修正またはロールバック提案。',

      'arch.box.knowledge.label':    'ナレッジ',
      'arch.box.knowledge.title':    '250 個の diag-{tech} エージェント',
      'arch.box.knowledge.desc':     '技術ごとに 1 つの MCP — postgres / kafka / istio / k8s / …。各々その技術固有の障害モード・主要メトリクス・トラブルシュート手順を内蔵。',
      'arch.box.reasoning.label':    '推論',
      'arch.box.reasoning.title':    'srefix-explorer',
      'arch.box.reasoning.desc':     'マニュアルでヒットしない場合のフォールバックと、上流に隠れた根本原因を見つけるためのクロス技術依存ファンアウト。',
      'arch.box.discovery.label':    'ディスカバリ',
      'arch.box.discovery.title':    'srefix-discovery',
      'arch.box.discovery.desc':     '5 層 33 個のアダプタ — クラウド・K8s・レジストリ・クラスタ直接接続・VM タグ。サービスとホストを発見します。',
      'arch.box.telemetry.label':    'テレメトリ & 実行',
      'arch.box.telemetry.title':    'prom · loki · es · jumphost',
      'arch.box.telemetry.desc':     'エージェントが実際の証拠を取得する場所: PromQL、LogQL、Elasticsearch、安全ゲートを持つ SSH-via-bastion コマンド実行。',

      'arch.preflight.label':        'プリフライト · オフライン',
      'arch.preflight.title':        'Verify',
      'arch.preflight.desc':         '独立ツール。マニュアルを信頼する前に一度実行 — エージェントで参照されるすべてのメトリクス名と PromQL を実際の exporter ホワイトリストと差分照合します。',

      'quickstart.eyebrow':          'クイックスタート',
      'quickstart.title':            '1 行で Claude に接続。',
      'quickstart.sub':              'すでに Claude Code または Claude Desktop を使っていますか?MCP 設定に srefix-diagnosis を追加するだけです。',
      'quickstart.step1.title':      'インストール',
      'quickstart.step1.desc':       'GitHub からクローンし、必要な MCP を pip でインストール。',
      'quickstart.step2.title':      '設定',
      'quickstart.step2.desc':       '生成された MCP ブロックを Claude の settings.json に貼り付け。',
      'quickstart.step3.title':      '使う',
      'quickstart.step3.desc':       'Claude に普通の言葉で質問するだけ。適切なエージェントが引き継ぎます。',
      'quickstart.cta':              'ドキュメントを読む ›',

      'final.title':                 '診断は数時間ではなく数分で。',
      'final.sub':                   'OSS · Apache 2.0 · ローカル実行 · ベンダーロックインなし。',
      'final.cta.github':            'GitHub を見る ›',

      'footer.tagline':              'AI 駆動の SRE 診断ツールキット。',
      'footer.repo':                 'GitHub リポジトリ',
      'footer.license':              'Apache 2.0',
      'footer.copyright':            '© 2026 srefix-diagnosis コントリビューター。',
    },

    /* ── 한국어 ─────────────────────────────────────────────── */
    ko: {
      'meta.title':                  'srefix-diagnosis — Claude를 위한 SRE 진단 툴킷',
      'meta.description':            'srefix-diagnosis: 250+ 기술 스택 특화 SRE 에이전트. MCP로 Claude에 연결. 로컬 실행, 오픈 소스.',

      'nav.what':                    '소개',
      'nav.agents':                  '에이전트',
      'nav.architecture':            '아키텍처',
      'nav.quickstart':              '빠른 시작',
      'nav.github':                  'GitHub',
      'nav.langLabel':               '언어',

      'hero.subtitle':               'Claude를 위한 SRE 진단 툴킷. 250+ 기술 특화 에이전트. 로컬 실행. 오픈 소스.',
      'hero.cta.start':              '시작하기 ›',
      'hero.cta.github':             'GitHub 보기 ›',
      'hero.terminal.title':         'claude code',
      'hero.terminal.line1':         '> 사용자가 auth-service 5xx 급증 보고',
      'hero.terminal.line2':         'srefix-diag-postgres 호출 — 커넥션 풀 확인',
      'hero.terminal.line3':         'srefix-diag-istio 호출 — 상류 속도 제한 확인',
      'hero.terminal.line4':         '근본 원인 확인: deploy#3892 설정 변경으로 인한 풀 고갈',
      'hero.terminal.line5':         '권장: deploy#3892 롤백 → MTTR 56초',

      'what.eyebrow':                '소개',
      'what.title':                  'Claude가 당신의 스택을 진짜로 이해하게 만드세요.',
      'what.sub':                    'srefix-diagnosis는 250+ 종의 주요 인프라(Postgres / Kafka / Istio / Kubernetes / Prometheus …)를 전문 에이전트로 래핑하여, MCP를 통해 Claude Code 또는 Claude Desktop에 연결합니다. 각 에이전트는 해당 기술의 장애 모드, 핵심 지표, 트러블슈팅 절차를 내장하고 있습니다.',
      'what.cta':                    '아키텍처 보기 ›',

      'agents.eyebrow':              '에이전트 라이브러리',
      'agents.title':                '250+ 전문 에이전트. 당신이 실제로 사용하는 모든 것.',
      'agents.sub':                  '범용 LLM에 프롬프트를 매번 작성할 필요 없습니다. 스택마다 전용 에이전트가 있습니다.',
      'agents.cta':                  '전체 목록 보기 ›',
      'agents.cat.databases':        '데이터베이스',
      'agents.cat.databases.desc':   'Postgres · MySQL · MongoDB · Redis · Cassandra · ClickHouse · …',
      'agents.cat.k8s':              '오케스트레이션 & 메시',
      'agents.cat.k8s.desc':         'Kubernetes · Istio · Envoy · ArgoCD · Helm · …',
      'agents.cat.cloud':            '클라우드 플랫폼',
      'agents.cat.cloud.desc':       'AWS · GCP · Azure · Aliyun · Tencent Cloud · Huawei Cloud · …',
      'agents.cat.observability':    '관측성',
      'agents.cat.observability.desc':'Prometheus · Grafana · Loki · Datadog · OpenTelemetry · …',
      'agents.cat.messaging':        '메시징 & 스트리밍',
      'agents.cat.messaging.desc':   'Kafka · RabbitMQ · NATS · Pulsar · Kinesis · …',
      'agents.cat.cicd':             'CI/CD & 플랫폼',
      'agents.cat.cicd.desc':        'GitHub Actions · GitLab CI · Spinnaker · Tekton · ArgoCD · …',

      'arch.eyebrow':                '아키텍처',
      'arch.title':                  'Claude가 맨 위. 아래 4개 계층을 필요에 따라 호출합니다.',
      'arch.sub':                    '파이프라인이 아닙니다 — Claude가 질문에 따라 동적으로 도구를 선택합니다. 모두 로컬에서 실행되며 데이터는 외부로 나가지 않습니다.',

      'arch.claude.label':           '오케스트레이터',
      'arch.claude.title':           'Claude',
      'arch.claude.desc':            '질문을 읽고, 도구를 선택하고, 증거를 평가하여 최종 결론을 도출합니다: 근본 원인, 영향 범위, 구체적인 수정 또는 롤백 제안.',

      'arch.box.knowledge.label':    '지식',
      'arch.box.knowledge.title':    '250개의 diag-{tech} 에이전트',
      'arch.box.knowledge.desc':     '기술마다 MCP 하나 — postgres / kafka / istio / k8s / …. 각각 해당 기술의 장애 모드, 핵심 지표, 트러블슈팅 절차를 내장.',
      'arch.box.reasoning.label':    '추론',
      'arch.box.reasoning.title':    'srefix-explorer',
      'arch.box.reasoning.desc':     '매뉴얼이 적중하지 못할 때의 폴백, 그리고 업스트림에 숨은 근본 원인을 찾기 위한 기술 간 의존성 팬아웃.',
      'arch.box.discovery.label':    '디스커버리',
      'arch.box.discovery.title':    'srefix-discovery',
      'arch.box.discovery.desc':     '5계층 33개 어댑터 — 클라우드, K8s, 레지스트리, 클러스터 직접 연결, VM 태그. 서비스와 호스트를 찾습니다.',
      'arch.box.telemetry.label':    '텔레메트리 & 실행',
      'arch.box.telemetry.title':    'prom · loki · es · jumphost',
      'arch.box.telemetry.desc':     '에이전트가 실제 증거를 가져오는 곳: PromQL, LogQL, Elasticsearch, 안전 게이트가 있는 SSH-via-bastion 명령 실행.',

      'arch.preflight.label':        '프리플라이트 · 오프라인',
      'arch.preflight.title':        'Verify',
      'arch.preflight.desc':         '독립 도구. 매뉴얼을 신뢰하기 전에 한 번 실행 — 에이전트가 참조하는 모든 지표명과 PromQL을 실제 exporter 화이트리스트와 대조합니다.',

      'quickstart.eyebrow':          '빠른 시작',
      'quickstart.title':            '한 줄로 Claude에 연결.',
      'quickstart.sub':              '이미 Claude Code나 Claude Desktop을 사용 중이세요? MCP 설정에 srefix-diagnosis를 추가하기만 하면 됩니다.',
      'quickstart.step1.title':      '설치',
      'quickstart.step1.desc':       'GitHub에서 클론하고 필요한 MCP를 pip로 설치합니다.',
      'quickstart.step2.title':      '설정',
      'quickstart.step2.desc':       '생성된 MCP 블록을 Claude의 settings.json에 붙여넣습니다.',
      'quickstart.step3.title':      '사용',
      'quickstart.step3.desc':       'Claude에게 평범한 언어로 질문하세요. 적절한 에이전트가 인계받습니다.',
      'quickstart.cta':              '전체 문서 읽기 ›',

      'final.title':                 '진단을 시간이 아닌 분 단위로.',
      'final.sub':                   '오픈 소스 · Apache 2.0 · 로컬 실행 · 벤더 락인 없음.',
      'final.cta.github':            'GitHub에서 보기 ›',

      'footer.tagline':              'AI 기반 SRE 진단 툴킷.',
      'footer.repo':                 'GitHub 저장소',
      'footer.license':              'Apache 2.0',
      'footer.copyright':            '© 2026 srefix-diagnosis 기여자들.',
    },

    /* ── Español ─────────────────────────────────────────────── */
    es: {
      'meta.title':                  'srefix-diagnosis — Kit de diagnóstico SRE para Claude',
      'meta.description':            'srefix-diagnosis: 250+ agentes SRE especializados que se conectan a Claude vía MCP. Ejecuta localmente. Código abierto.',

      'nav.what':                    'Qué es',
      'nav.agents':                  'Agentes',
      'nav.architecture':            'Arquitectura',
      'nav.quickstart':              'Inicio rápido',
      'nav.github':                  'GitHub',
      'nav.langLabel':               'Idioma',

      'hero.subtitle':               'Un kit de diagnóstico SRE para Claude. 250+ agentes especializados. Ejecuta localmente. Código abierto.',
      'hero.cta.start':              'Empezar ›',
      'hero.cta.github':             'Ver en GitHub ›',
      'hero.terminal.title':         'claude code',
      'hero.terminal.line1':         '> usuarios reportan picos 5xx en auth-service',
      'hero.terminal.line2':         'llamando a srefix-diag-postgres — comprobando pool de conexiones',
      'hero.terminal.line3':         'llamando a srefix-diag-istio — comprobando límites upstream',
      'hero.terminal.line4':         'causa raíz: agotamiento de pool por cambio de config en deploy#3892',
      'hero.terminal.line5':         'recomendación: revertir deploy#3892 → MTTR 56 s',

      'what.eyebrow':                'Qué es',
      'what.title':                  'Haz que Claude entienda de verdad tu stack.',
      'what.sub':                    'srefix-diagnosis envuelve 250+ piezas de infraestructura común (Postgres, Kafka, Istio, Kubernetes, Prometheus, …) en agentes especializados que se montan en Claude Code o Claude Desktop vía MCP. Cada agente trae los modos de fallo, métricas clave y runbooks de su tecnología.',
      'what.cta':                    'Ver la arquitectura ›',

      'agents.eyebrow':              'Biblioteca de agentes',
      'agents.title':                '250+ agentes especializados. Todo lo que realmente usas.',
      'agents.sub':                  'Deja de improvisar prompts en un LLM genérico. Cada stack tiene su propio agente experto.',
      'agents.cta':                  'Ver la lista completa ›',
      'agents.cat.databases':        'Bases de datos',
      'agents.cat.databases.desc':   'Postgres · MySQL · MongoDB · Redis · Cassandra · ClickHouse · …',
      'agents.cat.k8s':              'Orquestación y mesh',
      'agents.cat.k8s.desc':         'Kubernetes · Istio · Envoy · ArgoCD · Helm · …',
      'agents.cat.cloud':            'Plataformas cloud',
      'agents.cat.cloud.desc':       'AWS · GCP · Azure · Aliyun · Tencent Cloud · Huawei Cloud · …',
      'agents.cat.observability':    'Observabilidad',
      'agents.cat.observability.desc':'Prometheus · Grafana · Loki · Datadog · OpenTelemetry · …',
      'agents.cat.messaging':        'Mensajería y streaming',
      'agents.cat.messaging.desc':   'Kafka · RabbitMQ · NATS · Pulsar · Kinesis · …',
      'agents.cat.cicd':             'CI/CD y plataforma',
      'agents.cat.cicd.desc':        'GitHub Actions · GitLab CI · Spinnaker · Tekton · ArgoCD · …',

      'arch.eyebrow':                'Arquitectura',
      'arch.title':                  'Claude arriba. Cuatro capas que invoca según necesite.',
      'arch.sub':                    'No es un pipeline — Claude elige herramientas dinámicamente según la pregunta. Todo corre localmente; tus datos no salen.',

      'arch.claude.label':           'ORQUESTADOR',
      'arch.claude.title':           'Claude',
      'arch.claude.desc':            'Lee tu pregunta, elige las herramientas, pondera la evidencia y produce un veredicto final: causa raíz, alcance del impacto y un fix o rollback concreto.',

      'arch.box.knowledge.label':    'CONOCIMIENTO',
      'arch.box.knowledge.title':    '250 agentes diag-{tech}',
      'arch.box.knowledge.desc':     'Un MCP por tecnología — postgres, kafka, istio, k8s, …. Cada uno trae los modos de fallo, métricas clave y runbooks de su tecnología.',
      'arch.box.reasoning.label':    'RAZONAMIENTO',
      'arch.box.reasoning.title':    'srefix-explorer',
      'arch.box.reasoning.desc':     'Fallback cuando un manual no acierta, más fan-out de dependencias cross-tech para encontrar causas raíz escondidas upstream.',
      'arch.box.discovery.label':    'DESCUBRIMIENTO',
      'arch.box.discovery.title':    'srefix-discovery',
      'arch.box.discovery.desc':     '33 adaptadores en 5 capas — clouds, K8s, registries, bootstrap directo de clúster, tags de VM. Encuentra tus servicios y hosts.',
      'arch.box.telemetry.label':    'TELEMETRÍA & EJECUCIÓN',
      'arch.box.telemetry.title':    'prom · loki · es · jumphost',
      'arch.box.telemetry.desc':     'Donde los agentes obtienen evidencia real: PromQL, LogQL, Elasticsearch, más SSH-via-bastion para ejecución de comandos con safety gating.',

      'arch.preflight.label':        'PRE-FLIGHT · OFFLINE',
      'arch.preflight.title':        'Verify',
      'arch.preflight.desc':         'Herramienta independiente. Ejecútala antes de confiar en los manuales — compara cada nombre de métrica y PromQL referenciado por los agentes con whitelists reales de exporters.',

      'quickstart.eyebrow':          'Inicio rápido',
      'quickstart.title':            'Un comando para conectar Claude.',
      'quickstart.sub':              '¿Ya usas Claude Code o Claude Desktop? Añade srefix-diagnosis a tu configuración MCP.',
      'quickstart.step1.title':      'Instalar',
      'quickstart.step1.desc':       'Clona desde GitHub e instala con pip los MCP que necesites.',
      'quickstart.step2.title':      'Configurar',
      'quickstart.step2.desc':       'Pega el bloque MCP generado en el settings.json de Claude.',
      'quickstart.step3.title':      'Usar',
      'quickstart.step3.desc':       'Pregunta a Claude en lenguaje natural. Los agentes correctos toman el relevo.',
      'quickstart.cta':              'Leer la documentación completa ›',

      'final.title':                 'Diagnósticos en minutos, no horas.',
      'final.sub':                   'Código abierto · Apache 2.0 · Ejecuta localmente · Sin vendor lock-in.',
      'final.cta.github':            'Ver en GitHub ›',

      'footer.tagline':              'Un kit de diagnóstico SRE impulsado por IA.',
      'footer.repo':                 'Repositorio GitHub',
      'footer.license':              'Apache 2.0',
      'footer.copyright':            '© 2026 colaboradores de srefix-diagnosis.',
    },
  };

  /* ─────────────────────────────────────────────────────────────────
     PUBLIC API
     ─────────────────────────────────────────────────────────────── */
  const I18N = {
    LANGUAGES,
    DEFAULT_LANG,
    STORAGE_KEY,
    TRANSLATIONS,

    getLang() {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored && TRANSLATIONS[stored]) return stored;
      } catch (_) { /* localStorage may be blocked */ }

      const nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
      if (nav.startsWith('zh')) return 'zh';
      if (nav.startsWith('en')) return 'en';
      if (nav.startsWith('ja')) return 'ja';
      if (nav.startsWith('ko')) return 'ko';
      if (nav.startsWith('es')) return 'es';
      return DEFAULT_LANG;
    },

    setLang(code) {
      if (!TRANSLATIONS[code]) return;
      try { localStorage.setItem(STORAGE_KEY, code); } catch (_) { /* noop */ }
    },

    t(key, lang) {
      const dict = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];
      if (dict && dict[key] != null) return dict[key];
      const fallback = TRANSLATIONS.en;
      if (fallback && fallback[key] != null) return fallback[key];
      return key;
    },

    info(code) {
      return LANGUAGES.find(l => l.code === code) || LANGUAGES[0];
    },
  };

  root.SrefixI18n = I18N;
})(typeof window !== 'undefined' ? window : globalThis);
