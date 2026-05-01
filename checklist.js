const sections=[
 {id:"p1",name:"Phase 1: Distributed Systems Fundamentals",topics:["1.1|Concurrency vs Parallelism|Sync vs async;Threads vs processes vs coroutines;GIL;I/O-bound vs CPU-bound;Event loop","1.2|Message Queues and Brokers|Producer-consumer;Delivery semantics;Backpressure;DLQ;Durability tradeoffs","1.3|API Design Patterns|REST vs GraphQL vs gRPC;Idempotency;Rate limiting;Circuit breaker;Backoff with jitter"]},
 {id:"p2",name:"Phase 2: LLM & NLP Theory",topics:["2.1|How Language Models Work|Tokenization;Embeddings;Attention;Autoregressive generation;Sampling controls","2.2|Prompt Engineering Theory|Zero/few-shot;In-context learning;Prompt templates;Prompt roles;Injection awareness","2.3|RAG|Dense vs sparse retrieval;Similarity metrics;ANN/HNSW;Chunking;Reranking","2.4|Quantization Theory|FP32/16/INT8/INT4;QAT vs post-training;Perplexity impact;GPTQ/AWQ/GGUF;KV cache quantization"]},
 {id:"optA",name:"Optional A: Production Readiness",topics:["A1|Security for AI Agents|Threat modeling STRIDE;OWASP API/LLM risks;Secrets management;AuthN/AuthZ","A2|Testing & Verification|Contract tests;Workflow replay;LLM evals;Load + chaos tests","A3|Privacy & Compliance Basics|PII tagging;Retention/delete;Audit logs;GDPR/CCPA/SOC2 basics"]},
 {id:"optB",name:"Optional B: CS Foundations",topics:["B1|OS Fundamentals|Processes/threads;Scheduling;Memory;Sockets;File descriptors","B2|Networking Deep Dive|TCP/IP;DNS;TLS;HTTP/2;Connection pooling","B3|DB Internals + DS&A|WAL/MVCC;Indexes;Query planning;Hash/heap/graph basics"]}
];
const key="curriculum_checklist_v1";let checks=load();const sectionsEl=document.getElementById("sections");
render();document.getElementById("resetChecks").addEventListener("click",()=>{checks={};save();render()});
function load(){try{return JSON.parse(localStorage.getItem(key)||"{}")}catch{return{}}}
function save(){localStorage.setItem(key,JSON.stringify(checks))}
function expandAtomic(base){const out=[];base.forEach(item=>{out.push(`${item}: Core definition`);out.push(`${item}: Compare alternatives`);out.push(`${item}: Failure mode in this project`);out.push(`${item}: Mini exercise`)});return out}
function render(){sectionsEl.innerHTML="";let all=0,done=0;
sections.forEach(sec=>{const card=document.createElement("section");card.className="card section-card";let secAll=0,secDone=0;
const head=document.createElement("div");head.className="section-head";const h3=document.createElement("h3");h3.textContent=sec.name;const pct=document.createElement("p");pct.className="small";head.append(h3,pct);card.appendChild(head);
sec.topics.forEach(row=>{const [id,title,raw]=row.split("|");const base=raw.split(";").map(s=>s.trim()).filter(Boolean);const subs=expandAtomic(base);const block=document.createElement("div");block.className="topic-block";const th=document.createElement("h4");th.textContent=`${id} ${title}`;block.appendChild(th);const ul=document.createElement("ul");ul.className="check-list";
subs.forEach((s,i)=>{const ck=`${id}::${i}`;const li=document.createElement("li");const label=document.createElement("label");const input=document.createElement("input");input.type="checkbox";input.checked=!!checks[ck];input.addEventListener("change",()=>{checks[ck]=input.checked;save();render()});label.append(input,document.createTextNode(s));li.appendChild(label);ul.appendChild(li);secAll++;all++;if(checks[ck]){secDone++;done++;}});
const t=document.createElement("p");t.className="small";t.textContent=`Topic completion: ${Math.round((subs.filter((_,i)=>checks[`${id}::${i}`]).length/subs.length)*100)||0}%`;block.append(t,ul);card.appendChild(block);
});
pct.textContent=`Section completion: ${Math.round((secDone/secAll)*100)||0}% (${secDone}/${secAll})`;sectionsEl.appendChild(card);
});
const overall=Math.round((done/all)*100)||0;document.getElementById("overallPct").textContent=`${overall}%`;document.getElementById("overallBar").style.width=`${overall}%`;}
