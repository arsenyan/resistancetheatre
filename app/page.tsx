import Button from "@/components/Button";
import LogoSmall from "@/components/LogoSmall";
import LanguageSwitch from "@/components/LanguageSwitch";

export default function Home() {
  return (
    <div className="flex justify-between items-center">
      <LogoSmall />
      <nav><Button>о платформе</Button>
      <Button>расписание</Button>
      <Button>проекты</Button>
      <Button>контакты</Button>
      </nav>
      <LanguageSwitch />  
    </div>
  );
}
