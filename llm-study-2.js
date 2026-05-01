(function(){
  var BUILD='llm-study-2-v1-2026-05-01';
  var storageKey='llm_study_2_checks_v1';

  var modules=[
    {id:'m0',name:'Module 0: Prerequisite Math & Programming',subtopics:{
      '0.1 Linear Algebra':['Vectors: definition, dot product, magnitude','Cosine similarity (why for embeddings)','Matrices: multiplication, transpose, identity','Softmax function (logits -> probabilities)'],
      '0.2 Calculus':['Derivatives (slope of a function)','Partial derivatives & gradients','Chain rule (backpropagation foundation)'],
      '0.3 Probability & Statistics':['Probability distributions (sum to 1)','Cross-entropy loss','Conditional probability P(next|previous)'],
      '0.4 Python & PyTorch Basics':['Tensors (creation, indexing, reshaping)','Broadcasting rules','Autograd (automatic differentiation)','Simple neural net (Linear -> ReLU -> Linear)']
    }},
    {id:'m1',name:'Module 1: Classical NLP Foundations',subtopics:{
      '1.1 Text Processing':['Character vs word vs subword tokens','Byte Pair Encoding (BPE) step-by-step','WordPiece (BERT tokenizer)','SentencePiece (no-space tokenization)','Unicode normalization'],
      '1.2 Statistical Language Models':['n-grams & chain rule approximation','Markov assumption','Perplexity (LM quality)'],
      '1.3 Embeddings':['One-hot encoding','TF-IDF','Word2Vec: CBOW vs Skip-gram','Word2Vec: negative sampling','GloVe'],
      '1.4 Sequence Models':['RNN cell & hidden state','Vanishing/exploding gradients','LSTM gates','GRU','Bidirectional RNNs']
    }},
    {id:'m2',name:'Module 2: Transformer Architecture',subtopics:{
      '2.1 Attention':['Why attention','Scaled Dot-Product Attention','Masked attention (causal)','Cross-attention','Self-attention'],
      '2.2 Multi-Head Attention':['Splitting into heads','Concatenation & output projection','Why multiple heads'],
      '2.3 Positional Encoding':['Sinusoidal encodings','Learned positional embeddings','RoPE'],
      '2.4 Transformer Block':['LayerNorm pre/post','FFN with GELU','Residual connections','Dropout'],
      '2.5 Architectures':['Encoder-only (BERT)','Decoder-only (GPT)','Encoder-decoder (T5)'],
      '2.6 Generation':['Logits -> softmax','Temperature','Top-k','Top-p']
    }},
    {id:'m3',name:'Module 3: LLM Training & Post-Training',subtopics:{
      '3.1 Pre-training':['Next token prediction','Masked language modeling','Dataset filtering/dedup','Scaling laws'],
      '3.2 Fine-tuning':['Full fine-tuning','Prompt tuning','LoRA','QLoRA'],
      '3.3 Instruction Tuning':['(instruction,input,output) format','Self-instruct','Chat templates'],
      '3.4 Alignment':['Preference data','Reward model','PPO for RLHF','DPO'],
      '3.5 Quantization':['INT8/INT4','GPTQ','AWQ','KV cache']
    }},
    {id:'m4',name:'Module 4: Prompting & Reasoning',subtopics:{
      '4.1 Basic Prompting':['Zero-shot','Few-shot','System prompt design'],
      '4.2 Reasoning':['Chain-of-Thought','Self-consistency','Tree-of-Thoughts','Graph-of-Thoughts','ReAct'],
      '4.3 Structured Outputs':['JSON mode','Instructor validation','Regex/grammar constraints','Retry with feedback']
    }},
    {id:'m5',name:'Module 5: Agent Architecture',subtopics:{
      '5.1 Core Agent Loop':['Observation','Decision','Action','Reflection'],
      '5.2 Function Calling':['JSON Schema','Tool descriptions','Parallel tool calls','Tool error handling'],
      '5.3 Tool Types':['Retrieval tool','Calculator','Code executor','Browser/search','SQL executor','API caller'],
      '5.4 Memory':['Sliding window','Summarization memory','Vector DB search','Chunking','Metadata filtering','Reranking'],
      '5.5 Planning':['Single-step','Multi-step','Re-plan','Plan-and-execute','Reflexion'],
      '5.6 State Management':['State as dict','State graphs','Conditional edges','Cycles']
    }},
    {id:'m6',name:'Module 6: Advanced Agent Patterns',subtopics:{
      '6.1 Multi-Agent':['Router agent','Supervisor + workers','Hierarchical teams','Debate/reflection'],
      '6.2 Human-in-the-Loop':['Approval gates','Clarification loops','Human as tool'],
      '6.3 Code Agents':['Code LLMs','Sandboxed execution','Self-debugging']
    }},
    {id:'m7',name:'Module 7: Evaluation & Observability',subtopics:{
      '7.1 Agent Evals':['Task success rate','Tool-call accuracy','Cost per task','Latency','Golden dataset'],
      '7.2 LLM-as-Judge':['Rubrics','Pairwise comparison','Position bias mitigation'],
      '7.3 Observability':['Logging','Tracing','Metrics','LangSmith/Phoenix/Arize']
    }},
    {id:'m8',name:'Module 8: Production Best Practices',subtopics:{
      '8.1 Reliability':['Exponential backoff','Fallback models','Rate limiting/quota'],
      '8.2 Security':['Allowlist/denylist','Prompt injection prevention','Sandboxed execution'],
      '8.3 Cost Optimization':['Semantic caching','Small model routing','Token-aware truncation','Batching']
    }}
  ];

  var resources=[
    {k:['vector','dot product','matrix','linear algebra'],l:'3Blue1Brown Linear Algebra',u:'https://www.3blue1brown.com/topics/linear-algebra'},
    {k:['cosine similarity','embedding'],l:'Pinecone Similarity Search',u:'https://www.pinecone.io/learn/vector-similarity/'},
    {k:['softmax','cross-entropy'],l:'CS231n Softmax Classifier',u:'https://cs231n.github.io/linear-classify/#softmax'},
    {k:['derivative','gradient','chain rule','backprop'],l:'3Blue1Brown Backprop',u:'https://www.3blue1brown.com/lessons/backpropagation'},
    {k:['tensor','broadcasting','autograd','pytorch'],l:'PyTorch Tutorials',u:'https://pytorch.org/tutorials/'},
    {k:['bpe','token'],l:'Hugging Face Tokenizers',u:'https://huggingface.co/docs/tokenizers/index'},
    {k:['wordpiece','bert'],l:'BERT paper',u:'https://arxiv.org/abs/1810.04805'},
    {k:['sentencepiece'],l:'SentencePiece paper',u:'https://arxiv.org/abs/1808.06226'},
    {k:['unicode'],l:'Unicode Normalization (MDN)',u:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize'},
    {k:['n-gram','markov','perplexity'],l:'SLP Book (Jurafsky/Martin)',u:'https://web.stanford.edu/~jurafsky/slp3/'},
    {k:['tf-idf'],l:'scikit-learn TF-IDF',u:'https://scikit-learn.org/stable/modules/feature_extraction.html#tfidf-term-weighting'},
    {k:['word2vec','cbow','skip-gram','negative sampling'],l:'Word2Vec Explained (Alammar)',u:'https://jalammar.github.io/illustrated-word2vec/'},
    {k:['glove'],l:'GloVe project page',u:'https://nlp.stanford.edu/projects/glove/'},
    {k:['rnn','lstm','gru'],l:'Understanding LSTM Networks',u:'https://colah.github.io/posts/2015-08-Understanding-LSTMs/'},
    {k:['attention','self-attention','cross-attention','qkv'],l:'The Illustrated Transformer',u:'https://jalammar.github.io/illustrated-transformer/'},
    {k:['scaled dot-product','multi-head','positional','rope','layernorm','ffn','residual','dropout'],l:'Attention Is All You Need',u:'https://arxiv.org/abs/1706.03762'},
    {k:['gpt','decoder-only','encoder-only','t5'],l:'Hugging Face Transformers Docs',u:'https://huggingface.co/docs/transformers/index'},
    {k:['temperature','top-k','top-p'],l:'HF Generation Strategies',u:'https://huggingface.co/blog/how-to-generate'},
    {k:['pre-training','scaling laws'],l:'OpenAI Scaling Laws',u:'https://arxiv.org/abs/2001.08361'},
    {k:['lora','qlora','fine-tuning','prompt tuning'],l:'HF PEFT (LoRA/QLoRA)',u:'https://huggingface.co/docs/peft/index'},
    {k:['instruction tuning','chat template'],l:'HF Chat Templates',u:'https://huggingface.co/docs/transformers/chat_templating'},
    {k:['rlhf','reward model','ppo'],l:'RLHF Illustrated',u:'https://huggingface.co/blog/rlhf'},
    {k:['dpo'],l:'DPO Paper',u:'https://arxiv.org/abs/2305.18290'},
    {k:['quantization','gptq','awq','int8','int4'],l:'HF Quantization Docs',u:'https://huggingface.co/docs/transformers/quantization/overview'},
    {k:['kv cache'],l:'HF KV cache docs',u:'https://huggingface.co/docs/transformers/main/cache_explanation'},
    {k:['zero-shot','few-shot','system prompt'],l:'Prompting Guide',u:'https://www.promptingguide.ai/'},
    {k:['chain-of-thought'],l:'CoT Paper',u:'https://arxiv.org/abs/2201.11903'},
    {k:['react'],l:'ReAct Paper',u:'https://arxiv.org/abs/2210.03629'},
    {k:['tree-of-thought'],l:'Tree of Thoughts Paper',u:'https://arxiv.org/abs/2305.10601'},
    {k:['graph-of-thought'],l:'Graph of Thoughts Paper',u:'https://arxiv.org/abs/2308.09687'},
    {k:['json mode','instructor','regex','grammar'],l:'Structured Outputs (OpenAI)',u:'https://platform.openai.com/docs/guides/structured-outputs'},
    {k:['function calling','json schema','tool'],l:'Function Calling Guide',u:'https://platform.openai.com/docs/guides/function-calling'},
    {k:['retrieval','vector db','chunking','reranking','metadata'],l:'Pinecone RAG Learning Center',u:'https://www.pinecone.io/learn/'},
    {k:['plan','reflexion'],l:'Reflexion Paper',u:'https://arxiv.org/abs/2303.11366'},
    {k:['langgraph','state graph','conditional edges','cycles'],l:'LangGraph Docs',u:'https://langchain-ai.github.io/langgraph/'},
    {k:['multi-agent','router','supervisor'],l:'AutoGen Docs',u:'https://microsoft.github.io/autogen/'},
    {k:['human-in-the-loop'],l:'Google HITL Overview',u:'https://cloud.google.com/architecture/ai-ml/human-in-the-loop'},
    {k:['sandbox','code executor','self-debugging'],l:'Docker Docs',u:'https://docs.docker.com/'},
    {k:['eval','golden dataset','judge'],l:'LangSmith Evaluation Docs',u:'https://docs.smith.langchain.com/evaluation'},
    {k:['logging','tracing','metrics','observability'],l:'OpenTelemetry Docs',u:'https://opentelemetry.io/docs/'},
    {k:['reliability','backoff','rate limit'],l:'AWS Backoff + Jitter',u:'https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/'},
    {k:['security','allowlist','prompt injection'],l:'OWASP LLM Top 10',u:'https://owasp.org/www-project-top-10-for-large-language-model-applications/'},
    {k:['semantic caching','cost optimization','token'],l:'RAG 2026 Reddit Thread',u:'https://www.reddit.com/r/Rag/comments/1qvjhp4/what_are_the_best_resources_for_rag_in_2026/'},
    {k:['pytorch'],l:'PyTorch resources (Reddit thread)',u:'https://www.reddit.com/r/learnmachinelearning/comments/1j5trra/best_resources_to_learn_pytorch_in_2025/'}
  ];

  var exactResources={
    'vectors: definition, dot product, magnitude':{l:'3Blue1Brown Linear Algebra',u:'https://www.3blue1brown.com/topics/linear-algebra'},
    'cosine similarity (why for embeddings)':{l:'Pinecone Similarity',u:'https://www.pinecone.io/learn/vector-similarity/'},
    'matrices: multiplication, transpose, identity':{l:'Khan Academy Matrices',u:'https://www.khanacademy.org/math/linear-algebra/matrix-transformations'},
    'softmax function (logits -> probabilities)':{l:'CS231n Softmax',u:'https://cs231n.github.io/linear-classify/#softmax'},
    'derivatives (slope of a function)':{l:'Khan Derivatives',u:'https://www.khanacademy.org/math/differential-calculus'},
    'partial derivatives & gradients':{l:'3Blue1Brown Gradients',u:'https://www.3blue1brown.com/lessons/gradient-descent'},
    'chain rule (backpropagation foundation)':{l:'3Blue1Brown Backprop',u:'https://www.3blue1brown.com/lessons/backpropagation'},
    'probability distributions (sum to 1)':{l:'StatQuest Probability',u:'https://www.youtube.com/@statquest/search?query=probability'},
    'cross-entropy loss':{l:'ML Cheatsheet Cross Entropy',u:'https://ml-cheatsheet.readthedocs.io/en/latest/loss_functions.html#cross-entropy'},
    'conditional probability p(next|previous)':{l:'SLP Book',u:'https://web.stanford.edu/~jurafsky/slp3/'},
    'tensors (creation, indexing, reshaping)':{l:'PyTorch Tensors',u:'https://pytorch.org/tutorials/beginner/basics/tensorqs_tutorial.html'},
    'broadcasting rules':{l:'PyTorch Broadcasting',u:'https://pytorch.org/docs/stable/notes/broadcasting.html'},
    'autograd (automatic differentiation)':{l:'PyTorch Autograd',u:'https://pytorch.org/tutorials/beginner/basics/autogradqs_tutorial.html'},
    'simple neural net (linear -> relu -> linear)':{l:'PyTorch Neural Networks',u:'https://pytorch.org/tutorials/beginner/basics/buildmodel_tutorial.html'},
    'character vs word vs subword tokens':{l:'HF Tokenizer Summary',u:'https://huggingface.co/docs/transformers/tokenizer_summary'},
    'byte pair encoding (bpe) step-by-step':{l:'HF BPE',u:'https://huggingface.co/docs/transformers/tokenizer_summary#byte-pair-encoding-bpe'},
    'wordpiece (bert tokenizer)':{l:'HF WordPiece',u:'https://huggingface.co/docs/transformers/tokenizer_summary#wordpiece'},
    'sentencepiece (no-space tokenization)':{l:'SentencePiece Paper',u:'https://arxiv.org/abs/1808.06226'},
    'unicode normalization':{l:'Unicode Normalization',u:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize'},
    'n-grams & chain rule approximation':{l:'SLP n-grams',u:'https://web.stanford.edu/~jurafsky/slp3/'},
    'markov assumption':{l:'SLP n-grams',u:'https://web.stanford.edu/~jurafsky/slp3/'},
    'perplexity (lm quality)':{l:'SLP Perplexity',u:'https://web.stanford.edu/~jurafsky/slp3/'},
    'one-hot encoding':{l:'CS224N Word Vectors',u:'https://web.stanford.edu/class/archive/cs/cs224n/cs224n.1204/'},
    'tf-idf':{l:'scikit-learn TF-IDF',u:'https://scikit-learn.org/stable/modules/feature_extraction.html#tfidf-term-weighting'},
    'word2vec: cbow vs skip-gram':{l:'Illustrated Word2Vec',u:'https://jalammar.github.io/illustrated-word2vec/'},
    'word2vec: negative sampling':{l:'Word2Vec Negative Sampling',u:'https://jalammar.github.io/illustrated-word2vec/'},
    'glove':{l:'GloVe Project',u:'https://nlp.stanford.edu/projects/glove/'},
    'rnn cell & hidden state':{l:'CS224N RNNs',u:'https://web.stanford.edu/class/archive/cs/cs224n/cs224n.1204/'},
    'vanishing/exploding gradients':{l:'Colah LSTM',u:'https://colah.github.io/posts/2015-08-Understanding-LSTMs/'},
    'lstm gates':{l:'Colah LSTM',u:'https://colah.github.io/posts/2015-08-Understanding-LSTMs/'},
    'gru':{l:'Dive into Deep Learning GRU',u:'https://d2l.ai/chapter_recurrent-modern/gru.html'},
    'bidirectional rnns':{l:'Dive into Deep Learning BiRNN',u:'https://d2l.ai/chapter_recurrent-modern/bi-rnn.html'},
    'why attention':{l:'Illustrated Transformer',u:'https://jalammar.github.io/illustrated-transformer/'},
    'scaled dot-product attention':{l:'Attention Paper',u:'https://arxiv.org/abs/1706.03762'},
    'masked attention (causal)':{l:'HF Causal LM',u:'https://huggingface.co/docs/transformers/tasks/language_modeling'},
    'cross-attention':{l:'Illustrated Transformer',u:'https://jalammar.github.io/illustrated-transformer/'},
    'self-attention':{l:'Illustrated Transformer',u:'https://jalammar.github.io/illustrated-transformer/'},
    'splitting into heads':{l:'Attention Paper',u:'https://arxiv.org/abs/1706.03762'},
    'concatenation & output projection':{l:'Illustrated Transformer',u:'https://jalammar.github.io/illustrated-transformer/'},
    'why multiple heads':{l:'Attention Paper',u:'https://arxiv.org/abs/1706.03762'},
    'sinusoidal encodings':{l:'Attention Paper',u:'https://arxiv.org/abs/1706.03762'},
    'learned positional embeddings':{l:'HF Transformers',u:'https://huggingface.co/docs/transformers/index'},
    'rope':{l:'RoPE Paper',u:'https://arxiv.org/abs/2104.09864'},
    'layernorm pre/post':{l:'Annotated Transformer',u:'https://nlp.seas.harvard.edu/annotated-transformer/'},
    'ffn with gelu':{l:'Annotated Transformer',u:'https://nlp.seas.harvard.edu/annotated-transformer/'},
    'residual connections':{l:'Annotated Transformer',u:'https://nlp.seas.harvard.edu/annotated-transformer/'},
    'dropout':{l:'Dive into Deep Learning Dropout',u:'https://d2l.ai/chapter_multilayer-perceptrons/dropout.html'},
    'encoder-only (bert)':{l:'BERT Paper',u:'https://arxiv.org/abs/1810.04805'},
    'decoder-only (gpt)':{l:'GPT-3 Paper',u:'https://arxiv.org/abs/2005.14165'},
    'encoder-decoder (t5)':{l:'T5 Paper',u:'https://arxiv.org/abs/1910.10683'},
    'logits -> softmax':{l:'CS231n Softmax',u:'https://cs231n.github.io/linear-classify/#softmax'},
    'temperature':{l:'HF Generation',u:'https://huggingface.co/blog/how-to-generate'},
    'top-k':{l:'HF Generation',u:'https://huggingface.co/blog/how-to-generate'},
    'top-p':{l:'HF Generation',u:'https://huggingface.co/blog/how-to-generate'},
    'next token prediction':{l:'Karpathy nanoGPT',u:'https://github.com/karpathy/nanoGPT'},
    'masked language modeling':{l:'BERT Paper',u:'https://arxiv.org/abs/1810.04805'},
    'dataset filtering/dedup':{l:'HF Datasets',u:'https://huggingface.co/docs/datasets/index'},
    'scaling laws':{l:'Scaling Laws Paper',u:'https://arxiv.org/abs/2001.08361'},
    'full fine-tuning':{l:'HF Trainer',u:'https://huggingface.co/docs/transformers/training'},
    'prompt tuning':{l:'HF PEFT Prompt Tuning',u:'https://huggingface.co/docs/peft/task_guides/clm-prompt-tuning'},
    'lora':{l:'HF PEFT LoRA',u:'https://huggingface.co/docs/peft/developer_guides/lora'},
    'qlora':{l:'QLoRA Paper',u:'https://arxiv.org/abs/2305.14314'},
    '(instruction,input,output) format':{l:'Alpaca Self-Instruct',u:'https://crfm.stanford.edu/2023/03/13/alpaca.html'},
    'self-instruct':{l:'Self-Instruct Paper',u:'https://arxiv.org/abs/2212.10560'},
    'chat templates':{l:'HF Chat Templates',u:'https://huggingface.co/docs/transformers/chat_templating'},
    'preference data':{l:'RLHF Blog',u:'https://huggingface.co/blog/rlhf'},
    'reward model':{l:'RLHF Blog',u:'https://huggingface.co/blog/rlhf'},
    'ppo for rlhf':{l:'RLHF Blog',u:'https://huggingface.co/blog/rlhf'},
    'dpo':{l:'DPO Paper',u:'https://arxiv.org/abs/2305.18290'},
    'int8/int4':{l:'HF Quantization',u:'https://huggingface.co/docs/transformers/quantization/overview'},
    'gptq':{l:'HF GPTQ',u:'https://huggingface.co/docs/transformers/quantization/gptq'},
    'awq':{l:'HF AWQ',u:'https://huggingface.co/docs/transformers/quantization/awq'},
    'kv cache':{l:'HF KV Cache',u:'https://huggingface.co/docs/transformers/cache_explanation'},
    'zero-shot':{l:'Prompting Guide',u:'https://www.promptingguide.ai/techniques/zeroshot'},
    'few-shot':{l:'Prompting Guide',u:'https://www.promptingguide.ai/techniques/fewshot'},
    'system prompt design':{l:'OpenAI Prompting',u:'https://platform.openai.com/docs/guides/prompt-engineering'},
    'chain-of-thought':{l:'CoT Paper',u:'https://arxiv.org/abs/2201.11903'},
    'self-consistency':{l:'Self-Consistency Paper',u:'https://arxiv.org/abs/2203.11171'},
    'tree-of-thoughts':{l:'ToT Paper',u:'https://arxiv.org/abs/2305.10601'},
    'graph-of-thoughts':{l:'GoT Paper',u:'https://arxiv.org/abs/2308.09687'},
    'react':{l:'ReAct Paper',u:'https://arxiv.org/abs/2210.03629'},
    'json mode':{l:'OpenAI Structured Outputs',u:'https://platform.openai.com/docs/guides/structured-outputs'},
    'instructor validation':{l:'Instructor Docs',u:'https://python.useinstructor.com/'},
    'regex/grammar constraints':{l:'llama.cpp Grammars',u:'https://github.com/ggml-org/llama.cpp/blob/master/grammars/README.md'},
    'retry with feedback':{l:'Instructor Retries',u:'https://python.useinstructor.com/concepts/retrying/'},
    'observation':{l:'LangGraph Concepts',u:'https://langchain-ai.github.io/langgraph/concepts/'},
    'decision':{l:'OpenAI Function Calling',u:'https://platform.openai.com/docs/guides/function-calling'},
    'action':{l:'ReAct Paper',u:'https://arxiv.org/abs/2210.03629'},
    'reflection':{l:'Reflexion Paper',u:'https://arxiv.org/abs/2303.11366'},
    'json schema':{l:'JSON Schema',u:'https://json-schema.org/learn/getting-started-step-by-step'},
    'tool descriptions':{l:'OpenAI Function Calling',u:'https://platform.openai.com/docs/guides/function-calling'},
    'parallel tool calls':{l:'OpenAI Function Calling',u:'https://platform.openai.com/docs/guides/function-calling'},
    'tool error handling':{l:'LangGraph Errors',u:'https://langchain-ai.github.io/langgraph/concepts/low_level/'},
    'retrieval tool':{l:'Pinecone RAG',u:'https://www.pinecone.io/learn/retrieval-augmented-generation/'},
    'calculator':{l:'LangChain Tools',u:'https://python.langchain.com/docs/concepts/tools/'},
    'code executor':{l:'E2B Sandbox',u:'https://e2b.dev/docs'},
    'browser/search':{l:'Tavily Search API',u:'https://docs.tavily.com/'},
    'sql executor':{l:'LangChain SQL',u:'https://python.langchain.com/docs/tutorials/sql_qa/'},
    'api caller':{l:'MDN HTTP',u:'https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview'},
    'sliding window':{l:'LangChain Memory Concepts',u:'https://python.langchain.com/docs/concepts/memory/'},
    'summarization memory':{l:'LangChain Memory Concepts',u:'https://python.langchain.com/docs/concepts/memory/'},
    'vector db search':{l:'Pinecone Vector DB',u:'https://www.pinecone.io/learn/vector-database/'},
    'chunking':{l:'Pinecone Chunking',u:'https://www.pinecone.io/learn/chunking-strategies/'},
    'metadata filtering':{l:'Qdrant Filtering',u:'https://qdrant.tech/documentation/concepts/filtering/'},
    'reranking':{l:'Cohere Rerank',u:'https://docs.cohere.com/docs/reranking'},
    'single-step':{l:'LangGraph Concepts',u:'https://langchain-ai.github.io/langgraph/concepts/'},
    'multi-step':{l:'LangGraph Concepts',u:'https://langchain-ai.github.io/langgraph/concepts/'},
    're-plan':{l:'Plan-and-Solve Paper',u:'https://arxiv.org/abs/2305.04091'},
    'plan-and-execute':{l:'LangGraph Agents',u:'https://langchain-ai.github.io/langgraph/concepts/agentic_concepts/'},
    'reflexion':{l:'Reflexion Paper',u:'https://arxiv.org/abs/2303.11366'},
    'state as dict':{l:'LangGraph State',u:'https://langchain-ai.github.io/langgraph/concepts/low_level/'},
    'state graphs':{l:'LangGraph Docs',u:'https://langchain-ai.github.io/langgraph/'},
    'conditional edges':{l:'LangGraph Edges',u:'https://langchain-ai.github.io/langgraph/concepts/low_level/'},
    'cycles':{l:'LangGraph Cycles',u:'https://langchain-ai.github.io/langgraph/concepts/low_level/'},
    'router agent':{l:'LangGraph Routing',u:'https://langchain-ai.github.io/langgraph/tutorials/workflows/'},
    'supervisor + workers':{l:'AutoGen Multi-Agent',u:'https://microsoft.github.io/autogen/'},
    'hierarchical teams':{l:'CrewAI Docs',u:'https://docs.crewai.com/'},
    'debate/reflection':{l:'Multi-Agent Debate',u:'https://arxiv.org/abs/2305.14325'},
    'approval gates':{l:'Google HITL',u:'https://cloud.google.com/architecture/ai-ml/human-in-the-loop'},
    'clarification loops':{l:'OpenAI Prompting',u:'https://platform.openai.com/docs/guides/prompt-engineering'},
    'human as tool':{l:'LangGraph HITL',u:'https://langchain-ai.github.io/langgraph/concepts/human_in_the_loop/'},
    'code llms':{l:'HumanEval Paper',u:'https://arxiv.org/abs/2107.03374'},
    'sandboxed execution':{l:'Docker Docs',u:'https://docs.docker.com/'},
    'self-debugging':{l:'Self-Debugging Paper',u:'https://arxiv.org/abs/2304.05128'},
    'task success rate':{l:'LangSmith Evals',u:'https://docs.smith.langchain.com/evaluation'},
    'tool-call accuracy':{l:'LangSmith Evals',u:'https://docs.smith.langchain.com/evaluation'},
    'cost per task':{l:'OpenAI Cost Optimization',u:'https://platform.openai.com/docs/guides/latency-optimization'},
    'latency':{l:'OpenTelemetry',u:'https://opentelemetry.io/docs/'},
    'golden dataset':{l:'LangSmith Datasets',u:'https://docs.smith.langchain.com/evaluation/concepts#datasets'},
    'rubrics':{l:'LangSmith LLM-as-Judge',u:'https://docs.smith.langchain.com/evaluation/concepts#llm-as-judge'},
    'pairwise comparison':{l:'OpenAI Evals',u:'https://github.com/openai/evals'},
    'position bias mitigation':{l:'LLM-as-Judge Bias Paper',u:'https://arxiv.org/abs/2306.05685'},
    'logging':{l:'Langfuse Tracing',u:'https://langfuse.com/docs/tracing'},
    'tracing':{l:'OpenTelemetry Tracing',u:'https://opentelemetry.io/docs/concepts/signals/traces/'},
    'metrics':{l:'OpenTelemetry Metrics',u:'https://opentelemetry.io/docs/concepts/signals/metrics/'},
    'langsmith/phoenix/arize':{l:'Phoenix Docs',u:'https://phoenix.arize.com/'},
    'exponential backoff':{l:'AWS Backoff',u:'https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/'},
    'fallback models':{l:'OpenAI Reliability',u:'https://platform.openai.com/docs/guides/production-best-practices'},
    'rate limiting/quota':{l:'Cloudflare Rate Limiting',u:'https://www.cloudflare.com/learning/bots/what-is-rate-limiting/'},
    'allowlist/denylist':{l:'OWASP LLM Top 10',u:'https://owasp.org/www-project-top-10-for-large-language-model-applications/'},
    'prompt injection prevention':{l:'OWASP Prompt Injection',u:'https://owasp.org/www-project-top-10-for-large-language-model-applications/'},
    'semantic caching':{l:'Redis Semantic Cache',u:'https://redis.io/learn/howtos/solutions/vector/semantic-cache'},
    'small model routing':{l:'OpenAI Latency Optimization',u:'https://platform.openai.com/docs/guides/latency-optimization'},
    'token-aware truncation':{l:'OpenAI Prompt Caching',u:'https://platform.openai.com/docs/guides/prompt-caching'},
    'batching':{l:'OpenAI Batch API',u:'https://platform.openai.com/docs/guides/batch'}
  };

  var checks = load();
  var root = document.getElementById('sections');
  document.getElementById('resetChecks').addEventListener('click', function(){ checks={}; save(); render(); });

  render();

  function load(){ try{return JSON.parse(localStorage.getItem(storageKey)||'{}');}catch(e){return{};} }
  function save(){ localStorage.setItem(storageKey, JSON.stringify(checks)); }

  function findResource(text){
    var t=text.toLowerCase();
    if(exactResources[t]) return exactResources[t];
    for(var i=0;i<resources.length;i++){
      var rk=resources[i].k;
      for(var j=0;j<rk.length;j++) if(t.indexOf(rk[j])!==-1) return resources[i];
    }
    return {l:'General LLM Roadmap',u:'https://www.reddit.com/r/LocalLLaMA/'};
  }

  function render(){
    root.innerHTML='';
    var all=0, done=0;

    for(var mi=0; mi<modules.length; mi++){
      var m=modules[mi], secAll=0, secDone=0;
      var sec=document.createElement('section'); sec.className='card section-card';
      var md=document.createElement('details'); md.open = (mi===0);
      var ms=document.createElement('summary'); ms.textContent='▼ '+m.name; md.appendChild(ms);

      var subs=Object.keys(m.subtopics);
      for(var si=0; si<subs.length; si++){
        var sname=subs[si], items=m.subtopics[sname];
        var td=document.createElement('details');
        var ts=document.createElement('summary'); ts.textContent='▼ '+sname; td.appendChild(ts);

        var ul=document.createElement('ul'); ul.className='check-list';
        var tAll=0, tDone=0;
        for(var ii=0; ii<items.length; ii++){
          var it=items[ii];
          var key=m.id+'::'+sname+'::'+ii;
          var li=document.createElement('li');
          var row=document.createElement('div'); row.className='topic-row';
          var cb=document.createElement('input'); cb.type='checkbox'; cb.checked=!!checks[key];
          cb.addEventListener('change',(function(k,inp){return function(){checks[k]=inp.checked; save(); render();};})(key,cb));
          var text=document.createElement('span'); text.textContent=it;
          var res=findResource(it);
          var a=document.createElement('a'); a.className='res-link'; a.href=res.u; a.target='_blank'; a.rel='noopener noreferrer'; a.textContent=res.l; a.title=res.l;
          row.appendChild(cb); row.appendChild(text); row.appendChild(a); li.appendChild(row); ul.appendChild(li);
          tAll++; secAll++; all++; if(checks[key]){tDone++; secDone++; done++;}
        }
        var tp=document.createElement('p'); tp.className='small'; tp.textContent='Subtopic completion: '+Math.round((tDone/tAll)*100)+'% ('+tDone+'/'+tAll+')';
        td.appendChild(tp); td.appendChild(ul); md.appendChild(td);
      }

      var mp=document.createElement('p'); mp.className='small'; mp.textContent='Module completion: '+(secAll?Math.round((secDone/secAll)*100):0)+'% ('+secDone+'/'+secAll+')';
      md.appendChild(mp); sec.appendChild(md); root.appendChild(sec);
    }

    var pct=all?Math.round((done/all)*100):0;
    document.getElementById('overallPct').textContent=pct+'%';
    document.getElementById('overallBar').style.width=pct+'%';
  }
})();
