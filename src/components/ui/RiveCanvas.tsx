import { useRive } from '@rive-app/react-canvas';
import type { CatalogItem } from '../../data';

interface Props {
  item: CatalogItem;
}

export default function RiveCanvas({ item }: Props) {
  const { RiveComponent } = useRive({
    src: `/${item.rivFile}`,
    artboard: item.artboard || undefined,
    stateMachines: item.stateMachine || undefined,
    autoplay: true,
  });

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <RiveComponent className="rive-canvas" />
    </div>
  );
}
