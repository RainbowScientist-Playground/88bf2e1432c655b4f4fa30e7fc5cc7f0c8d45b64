import { Avatar, Badge, Identity, Name } from '../../../identity';
import { cn } from '../../../styles/theme';
import { useOnchainKit } from '../../../useOnchainKit';
import { useNFTContext } from '../NFTProvider';

type NFTCreatorReact = {
  className?: string;
};

export function NFTCreator({ className }: NFTCreatorReact) {
  const { schemaId } = useOnchainKit();
  const { creatorAddress } = useNFTContext();

  if (!creatorAddress) {
    return null;
  }

  return (
    <div className={cn('flex justify-between pb-2', className)}>
      <Identity
        className="space-x-2 px-0"
        address={creatorAddress}
        schemaId={schemaId}
      >
        <Avatar className="h-4 w-4" />
        <Name>
          <Badge />
        </Name>
      </Identity>
    </div>
  );
}
