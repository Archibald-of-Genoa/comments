export function addContentMock(quantity: number): void {
  const contentMockCount = quantity;
  const contentMock = <HTMLDivElement | null>document.querySelector(".contentMock");
  
  for (let i = 0; i < contentMockCount; i++) {
    const subcontent = <HTMLDivElement | null>document.createElement("div");
    subcontent.classList.add("contentMockElement");
    if (i === contentMockCount - 1) {
      subcontent.classList.add("span");
    }
    contentMock.appendChild(subcontent);
  }


}
