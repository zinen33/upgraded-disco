{ pkgs }: {
  deps = [
    pkgs.unzip
    pkgs.nodejs-22_x
    pkgs.bashInteractive
    pkgs.nodePackages.bash-language-server
    pkgs.man
  ];
}
