import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  const proxyPlaceholder = `http://username:password@host:port
socks5://username:password@host:port
socks5://username:password@host:port
http://host:port`;
  const addressesPlaceholder = `0x1234567890ABCDEF1234567890ABCDEF12345678
0x1234567890ABCDEF1234567890ABCDEF12345678
0x1234567890ABCDEF1234567890ABCDEF12345678
0x1234567890ABCDEF1234567890ABCDEF12345678`;

  return (
    <div className="items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        {/* <h1>Welcome to Airdrop Checker by github.com/maxktz</h1> */}
        <div className="w-full flex flex-row gap-5">
          <div className="grid w-full gap-2">
            <Label htmlFor="addresses">Your wallet addresses</Label>
            <Textarea
              className="resize-none h-[200px] font-[family-name:var(--font-geist-mono)]"
              id="addresses"
              placeholder={addressesPlaceholder}
            />
          </div>
          <div className="grid w-full gap-2 h-full">
            <Label htmlFor="proxies">
              Your proxies <i>(if any)</i>
            </Label>
            <Textarea
              className="resize-none h-[200px] font-[family-name:var(--font-geist-mono)]"
              id="proxies"
              placeholder={proxyPlaceholder}
            />
          </div>
        </div>
        <Button variant={"default"} className="w-full">
          Start Checking
        </Button>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
