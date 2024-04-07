import Bist100 from "../components/Markets/Bist100";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import Highlights from "../components/Markets/Highlights";

export default function Markets() {
  return (
    <>
      <div className="col-6 col-offset-3 shadow-3">
        <Card title="Borsa Istanbul" className="text-blue-700">
          <div className="m-0">
            <Bist100 />
          </div>
        </Card>
      </div>
      <Divider />
      <div className="col-12">
        <div className="mb-3">
          <Highlights />
        </div>
      </div>
      <Divider />
      
      
    </>
  );
}
