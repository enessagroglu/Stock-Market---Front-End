import DefaultPage from "../components/Home/DefaultPage";
import { Divider } from 'primereact/divider';
        

export default function Home() {
  return (
    <div class="grid">
      <div class="col-6 col-offset-3">
        <DefaultPage />
      </div>
      <Divider />
    </div>
  );
}
