import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";


const ProposalPage = () => {
  return (
      <div className="mb-20">
    <div id="/ProposalPage" className="flex justify-center  mt-20">
        <h1 className="text-3xl text-mono p-2 border-2 rounded-xl border-primary text-white bg-blue-700 m-3">How to get Started</h1>
    </div>
          <div className="mx-20 mt-10">
              <Card>
                  <CardHeader>
                      <ul className="mb-3">
                          <Image src="/Icons/code-fill.svg" height="20" width="20" alt="Solidity icon" className="w-6 h-6
                           inline mr-2" />
                          <span className="font-mono" >Step 1</span>
                      </ul>
                      <CardTitle className="font-mono text-xl">Consultation</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <p>Kicking off our partnership, the consultation serves as the primary stage where client and
                          web developer work hand-in-hand to articulate a detailed list of requirements and preferences
                          for each webpage.</p>
                  </CardContent>
              </Card>
          </div>
          <div className="mx-20 mt-10">
              <Card>
                  <CardHeader>
                      <ul className="mb-3">
                          <Image src="/Icons/lock.svg" height="20" width="20" alt="Solidity icon" className="w-6 h-6
                           inline mr-2" />
                          <span className="font-mono" >Step 2</span>
                      </ul>
                      <CardTitle className="font-mono text-xl">Proposal</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <p>
                          The proposal will encompass the creation of three mock-ups to showcase various website
                          layout and design options.</p>
                  </CardContent>
              </Card>
          </div>
          <div className="mx-20 mt-10">
              <Card>
                  <CardHeader>
                      <ul className="mb-3">
                          <Image src="/Icons/gear.svg" height="20" width="20" alt="Solidity icon" className="w-6 h-6
                           inline mr-2" />
                          <span className="font-mono" >Step 3</span>
                      </ul>
                      <CardTitle className="font-mono text-xl">Creation</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <p>
                          Ensuring continuous communication through regular client updates, I will focus on enhancing
                          the website&apos;s design, functionality, and conducting quality assurance tests to guarantee
                          a seamless launch.</p>
                  </CardContent>
              </Card>
          </div>
          <div className="mx-20 mt-10">
              <Card>
                  <CardHeader>
                      <ul className="mb-3">
                          <Image src="/Icons/code-computer.svg" height="20" width="20" alt="Solidity icon" className="w-6 h-6
                           inline mr-2" />
                          <span className="font-mono" >Step 4</span>
                      </ul>
                      <CardTitle className="font-mono text-xl">Lunch</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <p>As we unveil your site on the platform of your choice, I&apos;ll provide hands-on assistance in
                          navigating post-contract site management, tailored to your site&apos;s unique functionalities</p>
                  </CardContent>
              </Card>
          </div>




          </div>

  );
}

export default ProposalPage;