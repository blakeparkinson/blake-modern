interface ProjectCardProps {
  title: string;
  desc: string;
}

export default function ProjectCard({ title, desc }: ProjectCardProps) {
  return (
    <div style={{ margin: "1rem 0", padding: "1rem", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}
