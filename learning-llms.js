(function(){
  var BUILD_VERSION = "llm-page-v5-2026-05-01-16:28";
  var sections = [
    {id:"m0",name:"Module 0: Math + Python Foundations",resources:[
      ["3Blue1Brown: Essence of Linear Algebra","https://www.youtube.com/watch?v=RNTRYicPvWQ"],
      ["Khan Academy Calculus","https://www.khanacademy.org/math/calculus-1"],
      ["StatQuest Probability","https://www.youtube.com/@statquest"],
      ["PyTorch Tutorials","https://pytorch.org/tutorials/"]
    ],topics:[
      ["0.1","Linear Algebra",["Vectors","Dot product","Magnitude","Cosine similarity","Matrix multiplication","Transpose","Softmax"]],
      ["0.2","Calculus",["Derivatives","Partial derivatives","Gradients","Chain rule","Backprop intuition"]],
      ["0.3","Probability & Statistics",["Distributions","Conditional probability","Cross-entropy","Log-likelihood","Perplexity"]],
      ["0.4","Python & PyTorch",["Tensors","Broadcasting","Indexing","Reshaping","Autograd","Tiny MLP"]]
    ]},
    {id:"m1",name:"Module 1: Classical NLP Foundations",resources:[
      ["Jurafsky & Martin SLP","https://web.stanford.edu/~jurafsky/slp3/"],
      ["Jay Alammar blog","https://jalammar.github.io/"],
      ["Colah: Understanding LSTM","https://colah.github.io/posts/2015-08-Understanding-LSTMs/"],
      ["Hugging Face Tokenizers","https://huggingface.co/docs/tokenizers/index"]
    ],topics:[["1.1","Text Processing",["Token granularities","BPE","WordPiece","SentencePiece","Unicode normalization"]],["1.2","Statistical LMs",["n-grams","Markov assumption","Perplexity"]],["1.3","Embeddings",["One-hot","TF-IDF","CBOW","Skip-gram","Negative sampling","GloVe"]],["1.4","RNN Family",["RNN updates","Vanishing gradients","LSTM gates","GRU","BiRNN"]]]},
    {id:"m2",name:"Module 2: Transformer Architecture",resources:[
      ["Attention Is All You Need","https://arxiv.org/abs/1706.03762"],
      ["The Illustrated Transformer","https://jalammar.github.io/illustrated-transformer/"],
      ["Karpathy nanoGPT","https://github.com/karpathy/nanoGPT"],
      ["RoPE (paper)","https://arxiv.org/abs/2104.09864"]
    ],topics:[["2.1","Attention",["QKV","Scaled dot-product","Causal mask","Self-attention","Cross-attention"]],["2.2","Multi-head",["Head splitting","Concatenation","Output projection"]],["2.3","Positional Encoding",["Sinusoidal","Learned positions","RoPE"]],["2.4","Transformer Block",["LayerNorm","FFN","Residuals","Dropout"]],["2.5","Architectures",["Encoder-only","Decoder-only","Encoder-decoder"]],["2.6","Generation",["Logits","Temperature","Top-k","Top-p"]]]},
    {id:"m3",name:"Module 3: Training & Post-Training",resources:[["HF PEFT LoRA docs","https://huggingface.co/docs/peft/developer_guides/lora"],["PEFT docs","https://huggingface.co/docs/peft/index"],["RLHF illustrated","https://huggingface.co/blog/rlhf"],["DPO paper","https://arxiv.org/abs/2305.18290"]],topics:[["3.1","Pretraining",["Next-token objective","Masked LM","Dataset filtering","Scaling laws"]],["3.2","Fine-tuning",["Full FT","Prompt tuning","LoRA","QLoRA"]],["3.3","Instruction Tuning",["Triplet format","Self-instruct","Chat templates"]],["3.4","Alignment",["Preference data","Reward model","PPO","DPO"]],["3.5","Quantization",["INT8/INT4","GPTQ","AWQ","KV cache"]]]},
    {id:"m4",name:"Module 4: Prompting & Reasoning",resources:[["CoT paper","https://arxiv.org/abs/2201.11903"],["ReAct paper","https://arxiv.org/abs/2210.03629"],["Prompting Guide","https://www.promptingguide.ai/"],["OpenAI structured outputs","https://platform.openai.com/docs/guides/structured-outputs"]],topics:[["4.1","Basic Prompting",["Zero-shot","Few-shot","System prompts"]],["4.2","Reasoning",["CoT","Self-consistency","Tree-of-Thoughts","Graph-of-Thoughts","ReAct"]],["4.3","Structured Outputs",["JSON mode","Validation retries","Grammar constraints"]]]},
    {id:"m5",name:"Module 5: Agent Architecture",resources:[["LangGraph docs","https://langchain-ai.github.io/langgraph/"],["OpenAI function calling","https://platform.openai.com/docs/guides/function-calling"],["Pinecone learn","https://www.pinecone.io/learn/"],["Qdrant docs","https://qdrant.tech/documentation/"]],topics:[["5.1","Core Agent Loop",["Observation","Decision","Action","Reflection"]],["5.2","Function Calling",["JSON schema","Tool descriptions","Parallel calls","Error handling"]],["5.3","Tool Types",["Retrieval","Calculator","Code executor","Browser/search","SQL","API caller"]],["5.4","Memory",["Short-term","Sliding window","Summarization","Long-term vector memory","Chunking","Metadata filters","Reranking"]],["5.5","Planning",["Single-step","Multi-step","Re-plan","Plan-execute","Reflexion"]],["5.6","State",["State dict","State graph","Conditional edges","Cycles"]]]},
    {id:"m6",name:"Module 6: Advanced Patterns",resources:[["AutoGen docs","https://microsoft.github.io/autogen/"],["CrewAI docs","https://docs.crewai.com/"],["Human-in-the-loop overview","https://cloud.google.com/architecture/ai-ml/human-in-the-loop"],["Docker docs","https://docs.docker.com/"]],topics:[["6.1","Multi-Agent",["Router","Supervisor-workers","Hierarchies","Debate"]],["6.2","HITL",["Approval gates","Clarification","Human-as-tool"]],["6.3","Code Agents",["Code LLM choice","Sandbox execution","Self-debugging"]]]},
    {id:"m7",name:"Module 7: Evaluation & Observability",resources:[["LangSmith eval guide","https://docs.smith.langchain.com/evaluation"],["Arize Phoenix","https://phoenix.arize.com/"],["OpenTelemetry","https://opentelemetry.io/docs/"],["Weights & Biases reports","https://wandb.ai/site"]],topics:[["7.1","Agent Evals",["Success rate","Tool-call accuracy","Cost/task","Latency","Golden datasets"]],["7.2","LLM-as-Judge",["Rubrics","Pairwise eval","Position bias mitigation"]],["7.3","Observability",["Logs","Traces","Metrics"]]]},
    {id:"m8",name:"Module 8: Production Best Practices",resources:[["Google SRE book","https://sre.google/books/"],["OWASP API Top 10","https://owasp.org/www-project-api-security/"],["OWASP LLM Top 10","https://owasp.org/www-project-top-10-for-large-language-model-applications/"],["FinOps Foundation","https://www.finops.org/framework/"]],topics:[["8.1","Reliability",["Backoff","Fallback models","Rate limits"]],["8.2","Security",["Allowlist/denylist","Input sanitization","Sandboxing"]],["8.3","Cost Optimization",["Semantic cache","Small-router model","Token truncation"]]]}
  ];

  var storageKey = "learning_llms_checks_v1";
  var checks = loadChecks();
  var sectionsEl = document.getElementById("sections");
  var buildEl = document.getElementById("buildVersion");
  var resetBtn = document.getElementById("resetChecks");
  if (buildEl) buildEl.textContent = BUILD_VERSION;
  if (resetBtn) resetBtn.addEventListener("click", function(){ checks={}; saveChecks(); render(); });
  render();

  function loadChecks(){ try{return JSON.parse(localStorage.getItem(storageKey)||"{}");}catch(e){return{};} }
  function saveChecks(){ localStorage.setItem(storageKey, JSON.stringify(checks)); }
  function expandAtomic(s){ return [s+": Definition",s+": Why it matters",s+": Mini example",s+": Common mistake",s+": 10-min practice"]; }

  function render(){
    if(!sectionsEl) return; sectionsEl.innerHTML="";
    var all=0, done=0;
    for(var si=0; si<sections.length; si++){
      var sec=sections[si], secAll=0, secDone=0;
      var card=document.createElement("section"); card.className="card section-card";
      var det=document.createElement("details"); det.open = (si===0);
      var sum=document.createElement("summary"); sum.textContent=sec.name; det.appendChild(sum);

      var res=document.createElement("p"); res.className="small";
      var resHtml="Extra resources: ";
      for(var ri=0; ri<sec.resources.length; ri++){
        var rr=sec.resources[ri]; resHtml += '<a href="'+rr[1]+'" target="_blank" rel="noopener noreferrer">'+rr[0]+'</a>' + (ri<sec.resources.length-1?" | ":"");
      }
      res.innerHTML=resHtml; det.appendChild(res);

      for(var ti=0; ti<sec.topics.length; ti++){
        var topic=sec.topics[ti], id=topic[0], title=topic[1], subs=topic[2];
        var tdet=document.createElement("details");
        var tsum=document.createElement("summary"); tsum.textContent=id+" "+title; tdet.appendChild(tsum);
        var ul=document.createElement("ul"); ul.className="check-list";
        var expanded=[]; for(var i=0;i<subs.length;i++){ var x=expandAtomic(subs[i]); for(var j=0;j<x.length;j++) expanded.push(x[j]); }
        var topicAll=0, topicDone=0;
        for(var k=0;k<expanded.length;k++){
          var key=id+"::"+k;
          var li=document.createElement("li"); var label=document.createElement("label"); var input=document.createElement("input");
          input.type="checkbox"; input.checked=!!checks[key];
          (function(kk,inpt){ inpt.addEventListener("change", function(){ checks[kk]=inpt.checked; saveChecks(); render(); }); })(key,input);
          label.appendChild(input); label.appendChild(document.createTextNode(expanded[k])); li.appendChild(label); ul.appendChild(li);
          topicAll++; secAll++; all++; if(checks[key]){topicDone++; secDone++; done++;}
        }
        var p=document.createElement("p"); p.className="small"; p.textContent="Topic completion: "+Math.round((topicDone/topicAll)*100)+"% ("+topicDone+"/"+topicAll+")";
        tdet.appendChild(p); tdet.appendChild(ul); det.appendChild(tdet);
      }

      var secPct=document.createElement("p"); secPct.className="small";
      secPct.textContent="Section completion: "+(secAll?Math.round((secDone/secAll)*100):0)+"% ("+secDone+"/"+secAll+")";
      det.appendChild(secPct); card.appendChild(det); sectionsEl.appendChild(card);
    }
    var overall=(all?Math.round((done/all)*100):0);
    document.getElementById("overallPct").textContent=overall+"%";
    document.getElementById("overallBar").style.width=overall+"%";
  }
})();
