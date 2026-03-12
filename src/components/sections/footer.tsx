import { Container } from "@/components/layout/container";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <Container>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-muted-foreground">
          <span>&copy; 2026 juno kim</span>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            resume (pdf)
          </a>
        </div>
      </Container>
    </footer>
  );
}
