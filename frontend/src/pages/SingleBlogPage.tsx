import Navbar from "../components/Navbar"


const SingleBlogPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50">
      <div className="flex flex-col flex-grow">
        <Navbar />

        <div className="mx-90 mt-10 flex flex-col gap-5 justify-center text-justify">
          <div className="text-3xl font-bold">Top 10 places to goon</div>
          <div className="flex justify-left gap-5">
            <div>Author: Mr. Gar field</div>
            <div>Published on Feb 5, 2026</div>
          </div>

          <div className="text-sm">STEP 1: STUDY AND GIVE TESTS
A. Select the exams to give.
Almost all universities need TOEFL/IELTS scores for international students. Even though GRE is optional, having a GRE score would be better as the number of colleges to apply to increases. So while narrowing down the universities, you can consider other more important factors such as fees or the number of opportunities instead of the requirement for the GRE.
Positions like TA have requirements such as a minimum of 26/30 for speaking in TOEFL (in reference to ASU), so do not neglect the considerably easier exams.

TIP: Take the GRE test at the center instead of at home
In case of any technical issues, people at the center will solve them. However, at home, you will be solely responsible for it. The chances of termination of the test are also high.
Secondly, some universities do not accept home GRE test results.

B. Book your slot.
Give it early so that you have enough time to retake it if necessary. Once you have the scores, you can explore universities and their deadlines. (SAVE MONEY by paying for GRE and TOEFL at the same time. You get 25% off on TOEFL using this link)

TIP: The exam dates can change at the last moment (1 hour before the exam) if the center has a technical issue. Keep this possibility in mind if you are planning a late exam date.</div>
          
        </div>
      </div>
    </div>
  )
}

export default SingleBlogPage