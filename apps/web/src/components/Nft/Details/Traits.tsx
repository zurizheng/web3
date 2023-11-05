import type { OpenSeaNft } from '@hey/types/opensea-nft';
import { Card } from '@hey/ui';
import { type FC, memo } from 'react';

interface NftTraitsProps {
  nft: OpenSeaNft;
}

const NftTraits: FC<NftTraitsProps> = ({ nft }) => {
  if (!nft.traits?.length) {
    return null;
  }

  return (
    <Card>
      <h1 className="divider px-5 py-4 font-bold">Traits</h1>
      <p className="flex flex-wrap gap-2 p-5">
        {nft.traits.map((trait, index) => (
          <div key={index} className="rounded-lg border px-3 py-1 text-center">
            <div className="ld-text-gray-500 text-xs">{trait.trait_type}</div>
            <div className="text-sm font-bold">{trait.value}</div>
          </div>
        ))}
      </p>
    </Card>
  );
};

export default memo(NftTraits);
