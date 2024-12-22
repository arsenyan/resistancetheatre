import Button from "@/components/Button";
import LogoSmall from "@/components/LogoSmall";
import LanguageSwitch from "@/components/LanguageSwitch";

export default function Home() {
  return (
    <main className="container mx-auto">
    <div className="flex justify-between items-center">
      <a title="link" href="#" className="mr-auto"><LogoSmall /></a>
      <nav>
      <Button>о платформе</Button>
      <Button>расписание</Button>
      <Button>проекты</Button>
      <Button>контакты</Button>
      </nav>
      <LanguageSwitch />  
    </div>
    </main>
  );
}
