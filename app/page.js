export const metadata = {
  title: "Hello from Agentic",
  description: "A friendly greeting generated autonomously."
};

const facts = [
  "You can customize this starter to build your next idea.",
  "Deploying to Vercel keeps iterations fast.",
  "This page adapts beautifully on mobile and desktop."
];

export default function HomePage() {
  return (
    <main>
      <h1>Hello there 👋</h1>
      <p>Welcome to your freshly minted Next.js experience.</p>
      <ul>
        {facts.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>
      <a className="cta" href="https://vercel.com/templates/next.js">
        Explore Templates
      </a>
    </main>
  );
}
