import React, { useState, useRef } from 'react';
// Simple animated dots for loading
const LoadingDots = () => {
  const [dotCount, setDotCount] = useState(1);
  React.useEffect(() => {
    if (!dotCount) return;
    const interval = setInterval(() => {
      setDotCount(c => (c % 3) + 1);
    }, 400);
    return () => clearInterval(interval);
  }, [dotCount]);
  return <span style={{ opacity: 0.7, fontSize: 18, letterSpacing: 2 }}> {'.'.repeat(dotCount)} </span>;
};
import ReactMarkdown from 'react-markdown';

const OLLAMA_API_URL = 'https://nf0k4l6p-4000.inc1.devtunnels.ms/api/ollama/v1/chat/completions';
const MODEL = 'llama3.2:1b'; // You can change to any model from the list

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
  { role: 'system', content: `You are a helpful, warm, and friendly assistant for the PROJ-BLE company website. Always reply in a very polite, positive, and user-friendly manner, making users feel welcome and valued. Keep your answers simple, short, and to the point. Greet users, ask follow-up questions when appropriate, and encourage them to ask more about blended learning or PROJ-BLE. If a user seems unsure, offer suggestions for what they can ask. End your answers with a friendly touch, like "Is there anything else you'd like to know?" or "Feel free to ask me more!" Only answer questions using the following information. If you do not know the answer, kindly say you do not know. Do not make up information or answer from outside this context.\n\nBLE stands for Blended Learning in Education.\n\nBlended learning (also known as hybrid learning, technology-mediated instruction, web-enhanced instruction, or mixed-mode instruction) is an approach to education that combines online educational materials and opportunities for interaction online with physical place-based classroom methods. Blended learning requires the physical presence of both teacher and student, with some elements of student control over time, place, path, or pace. While students still attend brick-and-mortar schools with a teacher present, face-to-face classroom practices are combined with computer-mediated activities regarding content and delivery.\n\nBlended learning is highly context-dependent, but is generally defined as a mixture of online and in-person delivery where the online portion effectively replaces some of the face-to-face contact time rather than just supplementing it. Research shows that student achievement is often higher in blended learning experiences compared to either fully online or fully face-to-face learning.\n\nSome common models of blended learning include:\n- Face-to-face driver: Teacher leads instruction and augments with digital tools.\n- Rotation: Students cycle through online study and face-to-face classroom time.\n- Flex: Most curriculum is delivered digitally, with teachers available for support.\n- Labs: All curriculum is delivered digitally in a physical location.\n- Self-blend: Students choose to augment physical learning with online coursework.\n- Online driver: All curriculum and teaching is delivered online, with optional face-to-face meetings.\n\nAdvantages of blended learning include increased student achievement, flexibility, opportunities for personalized learning, and improved communication. Disadvantages can include technical challenges, the need for reliable technology, and the importance of digital literacy.\n\nFor more, see: https://en.wikipedia.org/wiki/Blended_learning\n\nPROJ-BLE Company Profile\n\nEmpowering the Future of Education\nAt PROJ-BLE, we are on a mission to revolutionize K-12 education through blended learning models. By integrating technology, pedagogy, and human connection, we create adaptive, engaging, and personalized learning experiences for every student.\n\nOur Mission\nTo redefine K-12 education by combining the strengths of traditional teaching with digital innovation.\nWe aim to:\n- Provide personalized learning experiences tailored to every student’s pace and ability.\n- Foster critical thinking and creativity beyond rote memorization.\n- Ensure equitable access to high-quality education, regardless of socio-economic background.\n\nOur Vision\nWe envision a future where every learner experiences personalized, high-quality education at the finest level of detail.\nTeachers as Facilitators: While technology powers content delivery, teachers remain at the heart of education—mentors, guides, and coordinators of holistic learning.\nBlended Ecosystem: Combining cutting-edge LMS platforms, expert instruction, and curated educational resources into a seamless ecosystem.\nStudent-Centred Future: A dynamic, engaging environment where every child thrives, equipped with skills for the future of work and lifelong success.\n\nOur Core Values\n- Innovation – We embrace technology to enhance learning outcomes.\n- Equity – Quality education should be accessible to every student.\n- Collaboration – Building strong partnerships between educators, parents, and communities.\n- Lifelong Learning – Education is about cultivating curiosity, adaptability, and a growth mindset.\n- Student-Centred Approach – Every initiative is driven by what benefits students the most.\n\nWhy Work With Us?\nAt PROJ-BLE, we are more than just an educational institution—we are a movement dedicated to transforming K-12 learning.\n\nWhat We Offer\n- Innovative Work Environment – Collaborate with educators and technologists using next-gen educational tools.\n- Professional Growth – Access ongoing training, workshops, and globally recognized certifications.\n- Meaningful Impact – Play a role in shaping the future of education and making a real difference in students’ lives.\n- Competitive Compensation – Attractive salaries, benefits, and growth opportunities.\n\nFuture Directions & Expansion\nWe are actively working on:\n- AI-driven Learning Platforms: Adaptive systems that personalize learning pathways for each student.\n- Global Collaborations: Partnering with schools, NGOs, and ed-tech leaders worldwide.\n- Teacher Empowerment: Equipping teachers with training and digital tools to maximize student impact.\n- Research & Development: Continuously innovating to stay ahead of evolving educational needs.\n\n✨ With this structure, PROJ-BLE’s profile now reads like a professional education-tech movement, not just a small project.` }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch(OLLAMA_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: MODEL,
          messages: newMessages.map(({ role, content }) => ({ role, content }))
        })
      });
      const data = await res.json();
      const aiMessage = data.choices?.[0]?.message?.content || 'Sorry, I could not get a response.';
      setMessages([...newMessages, { role: 'assistant', content: aiMessage }]);
    } catch (e) {
      setMessages([...newMessages, { role: 'assistant', content: 'Error connecting to Ollama API.' }]);
    }
    setLoading(false);
  };

  React.useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  return (
    <>
      <div style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 9999
      }}>
        {!open && (
          <button
            aria-label="Open chatbot"
            onClick={() => setOpen(true)}
            style={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              background: 'rgba(30, 20, 50, 0.55)',
              color: '#fff',
              border: '1.5px solid rgba(255,255,255,0.25)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              fontSize: 32,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              transition: 'background 0.2s',
              outline: 'none',
              borderBottom: '2px solid #a777e3',
            }}
          >
            <span style={{filter: 'drop-shadow(0 0 6px #a777e3)'}}>🎓</span>
          </button>
        )}
        {open && (
          <div style={{
            width: 370,
            height: 540,
            background: 'rgba(30, 20, 50, 0.55)',
            borderRadius: 22,
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            position: 'relative',
            border: '1.5px solid rgba(255,255,255,0.18)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            transition: 'all 0.2s',
          }}>
            <div style={{
              background: 'rgba(30, 20, 50, 0.75)',
              color: '#fff',
              padding: '18px 20px',
              fontWeight: 700,
              fontSize: 19,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1.5px solid rgba(255,255,255,0.10)',
              letterSpacing: 0.5,
              boxShadow: '0 2px 8px 0 rgba(167,119,227,0.08)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}>
              <span style={{display:'flex',alignItems:'center',gap:8}}>
                <span style={{fontSize:22,filter:'drop-shadow(0 0 6px #a777e3)'}}>🎓</span>
                BLE Chatbot
              </span>
              <button
                aria-label="Close chatbot"
                onClick={() => setOpen(false)}
                style={{
                  background: 'rgba(167,119,227,0.12)',
                  border: 'none',
                  color: '#fff',
                  fontSize: 22,
                  cursor: 'pointer',
                  marginLeft: 8,
                  borderRadius: 8,
                  padding: '2px 10px',
                  transition: 'background 0.2s',
                  outline: 'none',
                }}
                onMouseOver={e => e.currentTarget.style.background = 'rgba(167,119,227,0.22)'}
                onMouseOut={e => e.currentTarget.style.background = 'rgba(167,119,227,0.12)'}
              >
                ×
              </button>
            </div>
            <div
              style={{
                flex: 1,
                padding: 18,
                overflowY: 'auto',
                background: 'rgba(255,255,255,0.08)',
                fontSize: 15,
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
              }}
              className="ble-chatbot-scroll"
            >
      {/* Custom glassy scrollbar styles for the chatbot */}
      <style>{`
        .ble-chatbot-scroll::-webkit-scrollbar {
          width: 8px;
          background: transparent;
        }
        .ble-chatbot-scroll::-webkit-scrollbar-thumb {
          background: rgba(167,119,227,0.18);
          border-radius: 8px;
          box-shadow: 0 2px 8px 0 rgba(110,142,251,0.10);
          backdrop-filter: blur(8px);
          border: 1.5px solid rgba(255,255,255,0.10);
        }
        .ble-chatbot-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(167,119,227,0.28);
        }
        .ble-chatbot-scroll::-webkit-scrollbar-corner {
          background: transparent;
        }
      `}</style>
              {messages.slice(1).map((msg, i) => (
                <div key={i} style={{
                  marginBottom: 2,
                  textAlign: msg.role === 'user' ? 'right' : 'left',
                  display: 'flex',
                  justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                }}>
                  <div style={{
                    display: 'inline-block',
                    background: msg.role === 'user' ? 'linear-gradient(135deg, #a777e3 0%, #6e8efb 100%)' : 'rgba(255,255,255,0.18)',
                    color: msg.role === 'user' ? '#fff' : '#e0e0e0',
                    borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                    padding: '10px 16px',
                    maxWidth: '80%',
                    wordBreak: 'break-word',
                    boxShadow: msg.role === 'user' ? '0 2px 8px 0 rgba(167,119,227,0.10)' : '0 2px 8px 0 rgba(110,142,251,0.08)',
                    border: msg.role === 'user' ? 'none' : '1px solid rgba(255,255,255,0.10)',
                    fontWeight: 500,
                    fontSize: 15.5,
                    backdropFilter: 'blur(2px)',
                    WebkitBackdropFilter: 'blur(2px)',
                  }}>
                    {msg.role === 'assistant' ? (
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    ) : (
                      msg.content
                    )}
                  </div>
                </div>
              ))}
              {/* Loading animation for assistant reply */}
              {loading && (
                <div style={{
                  marginBottom: 2,
                  textAlign: 'left',
                  display: 'flex',
                  justifyContent: 'flex-start',
                }}>
                  <div style={{
                    display: 'inline-block',
                    background: 'rgba(255,255,255,0.18)',
                    color: '#e0e0e0',
                    borderRadius: '16px 16px 16px 4px',
                    padding: '10px 16px',
                    maxWidth: '80%',
                    wordBreak: 'break-word',
                    boxShadow: '0 2px 8px 0 rgba(110,142,251,0.08)',
                    border: '1px solid rgba(255,255,255,0.10)',
                    fontWeight: 500,
                    fontSize: 15.5,
                    backdropFilter: 'blur(2px)',
                    WebkitBackdropFilter: 'blur(2px)',
                  }}>
                    <LoadingDots />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <form
              onSubmit={e => { e.preventDefault(); handleSend(); }}
              style={{
                display: 'flex',
                borderTop: '1.5px solid rgba(255,255,255,0.10)',
                padding: 14,
                background: 'rgba(30, 20, 50, 0.55)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                gap: 8,
              }}
            >
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder={loading ? 'Waiting for response...' : 'Type your question...'}
                disabled={loading}
                style={{
                  flex: 1,
                  border: '1.5px solid rgba(167,119,227,0.25)',
                  borderRadius: 10,
                  padding: '10px 14px',
                  fontSize: 15.5,
                  outline: 'none',
                  background: 'rgba(255,255,255,0.10)',
                  color: '#fff',
                  marginRight: 0,
                  boxShadow: '0 2px 8px 0 rgba(167,119,227,0.05)',
                  transition: 'border 0.2s',
                }}
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                style={{
                  background: 'linear-gradient(135deg, #a777e3 0%, #6e8efb 100%)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 10,
                  padding: '10px 22px',
                  fontWeight: 700,
                  fontSize: 15.5,
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'background 0.2s',
                  boxShadow: '0 2px 8px 0 rgba(167,119,227,0.10)',
                  outline: 'none',
                  letterSpacing: 0.2,
                }}
              >
                {loading ? '...' : 'Send'}
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Chatbot;
