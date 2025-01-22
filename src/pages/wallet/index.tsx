import { WalletConponent } from "@/components";
import { AddressEditBottomSheet, ProfileBottomSheet } from "@/sheets";

const Wallet = () => {
  return (
    <>
      <WalletConponent />

      {/* Sheets */}
      <ProfileBottomSheet />
      <AddressEditBottomSheet />
    </>
  )
}

export default Wallet;