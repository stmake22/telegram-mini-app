declare interface Window {
  Adsgram: {
    init: (config: {
      blockId: string;
      debug?: boolean;
      debugBannerType?: "FullscreenMedia" | "OtherType";
    }) => AdControllerType;
  };
}