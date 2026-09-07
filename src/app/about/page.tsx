export const metadata = { title: "About" };

export default function About() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tighter">About</h1>
      <div className="space-y-4 text-sm leading-relaxed text-gray-600">
        <p>
          I&apos;m <span className="font-semibold text-black">Himanshu Dixit</span> — AI/ML Engineer based in Chennai, founder at{" "}
          <a href="https://www.pyfund.tech" className="underline">
            PyFund
          </a>
          . I care about getting models out of notebooks and into products people use.
        </p>
        <p>
          My focus: quantitative finance, RAG systems, and full-stack Next.js. Current obsession is{" "}
          <a href="https://github.com/Hima-D/pyfundlib" className="underline">
            PyFundLib
          </a>{" "}
          — making systematic trading boringly reliable (typed, tested, cached, monitored).
        </p>
        <p>Bio: “Passionate about using AI and machine learning to transform education and finance. Driven by curiosity and making technology more accessible.”</p>
      </div>
      <div className="flex flex-wrap gap-2 text-xs font-mono">
        <a href="https://github.com/Hima-D" className="underline">GitHub</a>
        <span className="text-gray-300">•</span>
        <a href="https://linkedin.com/in/him-d" className="underline">LinkedIn</a>
        <span className="text-gray-300">•</span>
        <a href="mailto:dixithimanshu012@gmail.com" className="underline">dixithimanshu012@gmail.com</a>
        <span className="text-gray-300">•</span>
        <span className="text-gray-500">Hima-D • 19 repos • PyFund</span>
      </div>
    </div>
  );
}
