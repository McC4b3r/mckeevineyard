import LinkStack from "./LinkStack";

export default function MenuLinks({ mobile = false, onNavigate }) {
  return <LinkStack mobile={mobile} onNavigate={onNavigate} />;
}
